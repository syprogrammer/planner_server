import { Injectable, BadRequestException, ForbiddenException } from '@nestjs/common';
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
        const tasks = await this.prisma.task.findMany({
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

        // Collect all unique user IDs from tasks
        const userIds = new Set<string>();
        const collectUserIds = (taskList: any[]) => {
            taskList.forEach(task => {
                if (task.createdBy) userIds.add(task.createdBy);
                if (task.reporterId) userIds.add(task.reporterId);
                if (task.assigneeId) userIds.add(task.assigneeId);
                if (task.subtasks) collectUserIds(task.subtasks);
            });
        };
        collectUserIds(tasks);

        // Fetch fresh user data if there are any user IDs
        const userMap = new Map<string, { name: string | null; avatarUrl: string | null }>();
        if (userIds.size > 0) {
            const users = await this.prisma.user.findMany({
                where: { id: { in: Array.from(userIds) } },
                select: { id: true, name: true, avatarUrl: true }
            });
            users.forEach(user => userMap.set(user.id, { name: user.name, avatarUrl: user.avatarUrl }));
        }

        // Transform tasks to use fresh user names
        const transformTask = (task: any) => {
            const creator = task.createdBy ? userMap.get(task.createdBy) : null;
            const reporter = task.reporterId ? userMap.get(task.reporterId) : null;
            const assignee = task.assigneeId ? userMap.get(task.assigneeId) : null;

            return {
                ...task,
                // Use fresh name from User table, fallback to stored name
                creatorName: creator?.name || task.creatorName,
                reporterName: reporter?.name || task.reporterName,
                assignedTo: assignee?.name || task.assignedTo,
                // Transform subtasks recursively
                subtasks: task.subtasks?.map(transformTask) || [],
            };
        };

        return tasks.map(transformTask);
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

        // Check if marking as DONE
        if (currentTask && dto.status === 'DONE' && currentTask.status !== 'DONE') {
            // Permission check: Only creator or reporter can mark as DONE
            if (context && currentTask.createdBy && currentTask.reporterId) {
                const isCreator = currentTask.createdBy === context.userId;
                const isReporter = currentTask.reporterId === context.userId;
                if (!isCreator && !isReporter) {
                    throw new ForbiddenException('Only the task creator or reporter can mark the task as DONE.');
                }
            }

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
                // Only creator can change reporter
                if (currentTask.createdBy && currentTask.createdBy !== context.userId) {
                    throw new ForbiddenException('Only the task creator can change the reporter.');
                }
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
                createdBy: true,
                reporterId: true,
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

        // Only creator or reporter can mark as DONE
        if (status === 'DONE' && context && currentTask.createdBy && currentTask.reporterId) {
            const isCreator = currentTask.createdBy === context.userId;
            const isReporter = currentTask.reporterId === context.userId;
            if (!isCreator && !isReporter) {
                throw new ForbiddenException('Only the task creator or reporter can mark the task as DONE.');
            }
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

        if (!task) {
            throw new BadRequestException('Task not found');
        }

        // Only creator can delete task
        if (context && task.createdBy && task.createdBy !== context.userId) {
            throw new ForbiddenException('Only the task creator can delete the task.');
        }

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
