import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLabelDto, UpdateLabelDto } from './dto/label.dto';

@Injectable()
export class LabelsService {
    constructor(private prisma: PrismaService) { }

    /**
     * Create a new label for a project
     */
    async create(dto: CreateLabelDto) {
        // Check if label with same name exists in project
        const existing = await this.prisma.label.findUnique({
            where: {
                projectId_name: {
                    projectId: dto.projectId,
                    name: dto.name,
                },
            },
        });

        if (existing) {
            throw new ConflictException('Label with this name already exists in the project');
        }

        return this.prisma.label.create({
            data: {
                name: dto.name,
                color: dto.color || '#6366f1',
                projectId: dto.projectId,
            },
        });
    }

    /**
     * Get all labels for a project
     */
    async findByProject(projectId: string) {
        return this.prisma.label.findMany({
            where: { projectId },
            orderBy: { name: 'asc' },
            include: {
                _count: {
                    select: { tasks: true },
                },
            },
        });
    }

    /**
     * Get a single label by ID
     */
    async findOne(id: string) {
        const label = await this.prisma.label.findUnique({
            where: { id },
            include: {
                tasks: {
                    include: {
                        task: {
                            select: {
                                id: true,
                                title: true,
                                status: true,
                            },
                        },
                    },
                },
            },
        });

        if (!label) {
            throw new NotFoundException('Label not found');
        }

        return label;
    }

    /**
     * Update a label
     */
    async update(id: string, dto: UpdateLabelDto) {
        return this.prisma.label.update({
            where: { id },
            data: dto,
        });
    }

    /**
     * Delete a label
     */
    async delete(id: string) {
        return this.prisma.label.delete({
            where: { id },
        });
    }

    /**
     * Add a label to a task
     */
    async addLabelToTask(taskId: string, labelId: string) {
        // Check if already exists
        const existing = await this.prisma.taskLabel.findUnique({
            where: {
                taskId_labelId: {
                    taskId,
                    labelId,
                },
            },
        });

        if (existing) {
            return existing;
        }

        return this.prisma.taskLabel.create({
            data: {
                taskId,
                labelId,
            },
            include: {
                label: true,
            },
        });
    }

    /**
     * Remove a label from a task
     */
    async removeLabelFromTask(taskId: string, labelId: string) {
        return this.prisma.taskLabel.delete({
            where: {
                taskId_labelId: {
                    taskId,
                    labelId,
                },
            },
        });
    }

    /**
     * Get all labels for a task
     */
    async getTaskLabels(taskId: string) {
        const taskLabels = await this.prisma.taskLabel.findMany({
            where: { taskId },
            include: {
                label: true,
            },
        });

        return taskLabels.map(tl => tl.label);
    }
}
