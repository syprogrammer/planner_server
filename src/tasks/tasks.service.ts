import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TaskType, Priority, Status, ActivityAction, EntityType } from '@prisma/client';
import { ActivityService } from '../activity/activity.service';

import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

// Context for activity logging
export interface ActivityContext {
    userId: string;
    userName: string;
}

@Injectable()
export class TasksService {
    constructor(
        private prisma: PrismaService,
        private activityService: ActivityService,
    ) { }

    async create(dto: CreateTaskDto, context?: ActivityContext) {
        // Get max order for this module (or subtask list)
        const maxOrder = await this.prisma.task.aggregate({
            where: { moduleId: dto.moduleId },
            _max: { order: true },
        });

        // Get module info for generating taskCode
        const module = await this.prisma.module.findUnique({
            where: { id: dto.moduleId },
        });

        if (!module) {
            throw new BadRequestException('Module not found');
        }

        let taskCode: string;

        if (dto.parentId) {
            // This is a subtask - get parent's taskCode and find next subtask index
            const parentTask = await this.prisma.task.findUnique({
                where: { id: dto.parentId },
            });

            // Count existing subtasks to determine the next index
            const subtaskCount = await this.prisma.task.count({
                where: { parentId: dto.parentId },
            });

            taskCode = `${parentTask?.taskCode || 'TASK'}.${subtaskCount + 1}`;
        } else {
            // This is a parent task - increment module's taskCounter
            const prefix = module.name.substring(0, 3).toUpperCase();
            const nextNumber = module.taskCounter + 1;
            taskCode = `${prefix}-${nextNumber}`;

            // Update module's taskCounter
            await this.prisma.module.update({
                where: { id: dto.moduleId },
                data: { taskCounter: nextNumber },
            });
        }

        const task = await this.prisma.task.create({
            data: {
                taskCode,
                title: dto.title,
                description: dto.description,
                type: dto.type || 'FEATURE',
                priority: dto.priority || 'MEDIUM',
                moduleId: dto.moduleId,
                assignedTo: dto.assignedTo,
                parentId: dto.parentId,
                order: (maxOrder._max.order ?? -1) + 1,
                // Audit: set creator and reporter (creator is default reporter)
                createdBy: context?.userId || dto.createdBy,
                creatorName: context?.userName || dto.creatorName,
                reporterId: dto.reporterId || context?.userId || dto.createdBy,
                reporterName: dto.reporterName || context?.userName || dto.creatorName,
            },
            include: {
                comments: true,
                subtasks: true,
                module: {
                    include: {
                        app: {
                            include: {
                                project: true,
                            },
                        },
                    },
                },
            },
        });

        // Log activity if context provided
        if (context && task.module?.app?.project) {
            await this.activityService.logActivity({
                action: ActivityAction.CREATED,
                userId: context.userId,
                userName: context.userName,
                entityType: EntityType.TASK,
                entityId: task.id,
                entityTitle: task.title,
                projectId: task.module.app.project.id,
            });
        }

        return task;
    }

    async findByModule(moduleId: string) {
        // Fetch only root tasks (no parent) and include their subtasks
        return this.prisma.task.findMany({
            where: {
                moduleId,
                parentId: null
            },
            include: {
                comments: {
                    orderBy: { createdAt: 'asc' },
                },
                subtasks: {
                    include: {
                        comments: true,
                        labels: { include: { label: true } },
                    },
                    orderBy: { order: 'asc' },
                },
                labels: {
                    include: { label: true }
                },
            },
            orderBy: { order: 'asc' },
        });
    }

    async findOne(id: string) {
        return this.prisma.task.findUnique({
            where: { id },
            include: {
                module: {
                    include: {
                        app: {
                            include: {
                                project: true,
                            },
                        },
                    },
                },
                comments: {
                    orderBy: { createdAt: 'asc' },
                },
                labels: {
                    include: {
                        label: true,
                    },
                },
            },
        });
    }

    async findHistory(taskId: string) {
        return this.prisma.taskHistory.findMany({
            where: { taskId },
            orderBy: { createdAt: 'desc' },
        });
    }

    async update(id: string, dto: UpdateTaskDto, context?: ActivityContext) {
        // Get current task for comparison
        const currentTask = await this.findOne(id);

        // Check if marking as DONE with incomplete subtasks
        if (dto.status === 'DONE' && currentTask?.status !== 'DONE') {
            const incompleteSubtasks = await this.prisma.task.count({
                where: {
                    parentId: id,
                    status: { not: 'DONE' },
                },
            });

            if (incompleteSubtasks > 0) {
                throw new BadRequestException('Cannot mark task as DONE because it has incomplete subtasks.');
            }
        }

        const task = await this.prisma.task.update({
            where: { id },
            data: dto,
            include: {
                comments: true,
                module: {
                    include: {
                        app: {
                            include: {
                                project: true,
                            },
                        },
                    },
                },
            },
        });

        // Log activity and task history if context provided
        if (context && task.module?.app?.project && currentTask) {
            const projectId = task.module.app.project.id;

            // Helper to log both ActivityLog and TaskHistory
            const logChange = async (field: string, oldValue: string | null | undefined, newValue: string | null | undefined, action: ActivityAction) => {
                // Log to ActivityLog
                await this.activityService.logActivity({
                    action,
                    field,
                    oldValue: oldValue || undefined,
                    newValue: newValue || undefined,
                    userId: context.userId,
                    userName: context.userName,
                    entityType: EntityType.TASK,
                    entityId: task.id,
                    entityTitle: task.title,
                    projectId,
                });

                // Log to TaskHistory
                await this.prisma.taskHistory.create({
                    data: {
                        taskId: task.id,
                        actorId: context.userId,
                        actorName: context.userName,
                        field,
                        oldValue: oldValue || null,
                        newValue: newValue || null,
                    },
                });
            };

            // Check for status change
            if (dto.status && currentTask.status !== dto.status) {
                await logChange('status', currentTask.status, dto.status, ActivityAction.STATUS_CHANGED);
            }

            // Check for priority change
            if (dto.priority && currentTask.priority !== dto.priority) {
                await logChange('priority', currentTask.priority, dto.priority, ActivityAction.PRIORITY_CHANGED);
            }

            // Check for assignee change
            if (dto.assignedTo !== undefined && currentTask.assignedTo !== dto.assignedTo) {
                const action = dto.assignedTo ? ActivityAction.ASSIGNED : ActivityAction.UNASSIGNED;
                await logChange('assignedTo', currentTask.assignedTo, dto.assignedTo, action);
            }

            // Check for reporter change
            if (dto.reporterId !== undefined && currentTask.reporterId !== dto.reporterId) {
                await logChange('reporter', currentTask.reporterName, dto.reporterName, ActivityAction.UPDATED);
            }

            // Check for start date change
            if (dto.startDate !== undefined) {
                const oldDate = currentTask.startDate ? new Date(currentTask.startDate).toISOString().split('T')[0] : null;
                const newDate = dto.startDate ? new Date(dto.startDate).toISOString().split('T')[0] : null;
                if (oldDate !== newDate) {
                    await logChange('startDate', oldDate, newDate, ActivityAction.UPDATED);
                }
            }

            // Check for due date change
            if (dto.endDate !== undefined) {
                const oldDate = currentTask.endDate ? new Date(currentTask.endDate).toISOString().split('T')[0] : null;
                const newDate = dto.endDate ? new Date(dto.endDate).toISOString().split('T')[0] : null;
                if (oldDate !== newDate) {
                    await logChange('dueDate', oldDate, newDate, ActivityAction.UPDATED);
                }
            }

            // Check for title change
            if (dto.title && currentTask.title !== dto.title) {
                await logChange('title', currentTask.title, dto.title, ActivityAction.UPDATED);
            }

            // Check for description change
            if (dto.description !== undefined && currentTask.description !== dto.description) {
                await logChange('description',
                    currentTask.description ? currentTask.description.substring(0, 50) + '...' : 'None',
                    dto.description ? dto.description.substring(0, 50) + '...' : 'None',
                    ActivityAction.UPDATED
                );
            }
        }

        return task;
    }

    // Update task status (for Kanban drag-drop)
    async updateStatus(id: string, status: Status, context?: ActivityContext) {
        // Get minimal current task data with project ID for activity logging
        const currentTask = await this.prisma.task.findUnique({
            where: { id },
            select: {
                id: true,
                status: true,
                title: true,
                moduleId: true,
                module: {
                    select: {
                        app: {
                            select: {
                                projectId: true,
                            },
                        },
                    },
                },
            },
        });

        if (!currentTask) {
            throw new BadRequestException('Task not found');
        }

        // Check if marking as DONE with incomplete subtasks
        if (status === 'DONE' && currentTask.status !== 'DONE') {
            const incompleteSubtasks = await this.prisma.task.count({
                where: {
                    parentId: id,
                    status: { not: 'DONE' },
                },
            });

            if (incompleteSubtasks > 0) {
                throw new BadRequestException('Cannot mark task as DONE because it has incomplete subtasks.');
            }
        }

        // Update task status - return minimal data for fast response
        const task = await this.prisma.task.update({
            where: { id },
            data: { status },
            select: {
                id: true,
                status: true,
                moduleId: true,
                title: true,
            },
        });

        // Log activity asynchronously (fire and forget) - don't block the response
        if (context && currentTask.status !== status && currentTask.module?.app?.projectId) {
            // Fire and forget - don't await to avoid blocking the response
            this.activityService.logActivity({
                action: ActivityAction.STATUS_CHANGED,
                field: 'status',
                oldValue: currentTask.status,
                newValue: status,
                userId: context.userId,
                userName: context.userName,
                entityType: EntityType.TASK,
                entityId: task.id,
                entityTitle: task.title,
                projectId: currentTask.module.app.projectId,
            }).catch((err) => {
                // Silently log errors to avoid breaking the response
                console.error('Failed to log activity:', err);
            });
        }

        return task;
    }

    async reorder(moduleId: string, taskIds: string[]) {
        const updates = taskIds.map((id, index) =>
            this.prisma.task.update({
                where: { id },
                data: { order: index },
            }),
        );

        return this.prisma.$transaction(updates);
    }

    async delete(id: string, context?: ActivityContext) {
        // Get task info before deletion for logging
        const task = await this.findOne(id);

        const deletedTask = await this.prisma.task.delete({
            where: { id },
        });

        // Log activity if context provided
        if (context && task?.module?.app?.project) {
            await this.activityService.logActivity({
                action: ActivityAction.DELETED,
                userId: context.userId,
                userName: context.userName,
                entityType: EntityType.TASK,
                entityId: id,
                entityTitle: task.title,
                projectId: task.module.app.project.id,
            });
        }

        return deletedTask;
    }
}
