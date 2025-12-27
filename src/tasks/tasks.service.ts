import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TaskType, Priority, Status, ActivityAction, EntityType } from '@prisma/client';
import { ActivityService } from '../activity/activity.service';

export class CreateTaskDto {
    title: string;
    description?: string;
    type?: TaskType;
    priority?: Priority;
    moduleId: string;
    assignedTo?: string;
    parentId?: string;
}

export class UpdateTaskDto {
    title?: string;
    description?: string;
    type?: TaskType;
    priority?: Priority;
    status?: Status;
    assignedTo?: string;
    remarks?: string;
    startDate?: Date;
    endDate?: Date;
    parentId?: string;
}

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

        const task = await this.prisma.task.create({
            data: {
                title: dto.title,
                description: dto.description,
                type: dto.type || 'FEATURE',
                priority: dto.priority || 'MEDIUM',
                moduleId: dto.moduleId,
                assignedTo: dto.assignedTo,
                parentId: dto.parentId,
                order: (maxOrder._max.order ?? -1) + 1,
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
                    },
                    orderBy: { order: 'asc' },
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
            },
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

        // Log activity if context provided
        if (context && task.module?.app?.project && currentTask) {
            const projectId = task.module.app.project.id;

            // Check for status change
            if (dto.status && currentTask.status !== dto.status) {
                await this.activityService.logActivity({
                    action: ActivityAction.STATUS_CHANGED,
                    field: 'status',
                    oldValue: currentTask.status,
                    newValue: dto.status,
                    userId: context.userId,
                    userName: context.userName,
                    entityType: EntityType.TASK,
                    entityId: task.id,
                    entityTitle: task.title,
                    projectId,
                });
            }

            // Check for priority change
            if (dto.priority && currentTask.priority !== dto.priority) {
                await this.activityService.logActivity({
                    action: ActivityAction.PRIORITY_CHANGED,
                    field: 'priority',
                    oldValue: currentTask.priority,
                    newValue: dto.priority,
                    userId: context.userId,
                    userName: context.userName,
                    entityType: EntityType.TASK,
                    entityId: task.id,
                    entityTitle: task.title,
                    projectId,
                });
            }

            // Check for assignee change
            if (dto.assignedTo !== undefined && currentTask.assignedTo !== dto.assignedTo) {
                const action = dto.assignedTo ? ActivityAction.ASSIGNED : ActivityAction.UNASSIGNED;
                await this.activityService.logActivity({
                    action,
                    field: 'assignedTo',
                    oldValue: currentTask.assignedTo || undefined,
                    newValue: dto.assignedTo || undefined,
                    userId: context.userId,
                    userName: context.userName,
                    entityType: EntityType.TASK,
                    entityId: task.id,
                    entityTitle: task.title,
                    projectId,
                });
            }
        }

        return task;
    }

    // Update task status (for Kanban drag-drop)
    async updateStatus(id: string, status: Status, context?: ActivityContext) {
        // Get current task for comparison
        const currentTask = await this.findOne(id);

        // Check if marking as DONE with incomplete subtasks
        if (status === 'DONE' && currentTask?.status !== 'DONE') {
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
            data: { status },
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

        // Log activity if context provided
        if (context && task.module?.app?.project && currentTask) {
            await this.activityService.logActivity({
                action: ActivityAction.STATUS_CHANGED,
                field: 'status',
                oldValue: currentTask.status,
                newValue: status,
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
