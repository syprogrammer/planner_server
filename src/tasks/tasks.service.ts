import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TaskType, Priority, Status } from '@prisma/client';

export class CreateTaskDto {
    title: string;
    description?: string;
    type?: TaskType;
    priority?: Priority;
    moduleId: string;
    assignedTo?: string;
}

export class UpdateTaskDto {
    title?: string;
    description?: string;
    type?: TaskType;
    priority?: Priority;
    designStatus?: Status;
    devStatus?: Status;
    qaStatus?: Status;
    apiStatus?: Status;
    assignedTo?: string;
    remarks?: string;
    startDate?: Date;
    endDate?: Date;
}

@Injectable()
export class TasksService {
    constructor(private prisma: PrismaService) { }

    async create(dto: CreateTaskDto) {
        // Get max order for this module
        const maxOrder = await this.prisma.task.aggregate({
            where: { moduleId: dto.moduleId },
            _max: { order: true },
        });

        return this.prisma.task.create({
            data: {
                title: dto.title,
                description: dto.description,
                type: dto.type || 'FEATURE',
                priority: dto.priority || 'MEDIUM',
                moduleId: dto.moduleId,
                assignedTo: dto.assignedTo,
                order: (maxOrder._max.order ?? -1) + 1,
            },
            include: {
                comments: true,
            },
        });
    }

    async findByModule(moduleId: string) {
        return this.prisma.task.findMany({
            where: { moduleId },
            include: {
                comments: {
                    orderBy: { createdAt: 'asc' },
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

    async update(id: string, dto: UpdateTaskDto) {
        return this.prisma.task.update({
            where: { id },
            data: dto,
            include: {
                comments: true,
            },
        });
    }

    async updateStatus(id: string, field: string, status: Status) {
        const validFields = ['designStatus', 'devStatus', 'qaStatus', 'apiStatus'];
        if (!validFields.includes(field)) {
            throw new Error(`Invalid status field: ${field}`);
        }

        return this.prisma.task.update({
            where: { id },
            data: { [field]: status },
        });
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

    async delete(id: string) {
        return this.prisma.task.delete({
            where: { id },
        });
    }

    // For Kanban view - move task to different status
    async moveToStatus(id: string, status: Status) {
        return this.prisma.task.update({
            where: { id },
            data: { devStatus: status },
        });
    }
}
