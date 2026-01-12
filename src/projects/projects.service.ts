import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';
import { CreateProjectDto, UpdateProjectDto } from './dto/project.dto';

@Injectable()
export class ProjectsService {
    constructor(private prisma: PrismaService) { }

    /**
     * Create a new project with the creator as owner and ADMIN member
     */
    async create(userId: string, userName: string, dto: CreateProjectDto) {
        return this.prisma.project.create({
            data: {
                name: dto.name,
                description: dto.description,
                ownerId: userId,
                members: {
                    create: {
                        userId: userId,
                        name: userName || 'Project Owner',
                        role: Role.ADMIN,
                    }
                }
            },
            include: {
                apps: true,
                members: true,
            },
        });
    }

    /**
     * Find all projects where user is a member
     */
    async findAllByUser(userId: string) {
        return this.prisma.project.findMany({
            where: {
                members: {
                    some: {
                        userId: userId,
                    },
                },
            },
            include: {
                apps: {
                    include: {
                        _count: { select: { modules: true } },
                    },
                },
                members: true,
                owner: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
                _count: { select: { apps: true } },
            },
            orderBy: { updatedAt: 'desc' },
        });
    }

    async findOne(id: string) {
        const project = await this.prisma.project.findUnique({
            where: { id },
            include: {
                apps: {
                    include: {
                        modules: {
                            include: {
                                tasks: {
                                    where: { parentId: null },
                                    include: {
                                        subtasks: {
                                            include: {
                                                comments: true,
                                                labels: { include: { label: true } },
                                            },
                                            orderBy: { order: 'asc' },
                                        },
                                        comments: {
                                            orderBy: { createdAt: 'asc' },
                                        },
                                        labels: {
                                            include: { label: true }
                                        },
                                    },
                                    orderBy: { order: 'asc' },
                                },
                                _count: { select: { tasks: true } },
                            },
                            orderBy: { order: 'asc' },
                        },
                    },
                },
                members: true,
                owner: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },
        });

        if (!project) {
            throw new NotFoundException('Project not found');
        }

        return project;
    }

    async update(id: string, dto: UpdateProjectDto) {
        return this.prisma.project.update({
            where: { id },
            data: {
                name: dto.name,
                description: dto.description,
            },
        });
    }

    async delete(id: string) {
        return this.prisma.project.delete({
            where: { id },
        });
    }

    async getProjectStats(id: string) {
        const project = await this.prisma.project.findUnique({
            where: { id },
            include: {
                apps: {
                    include: {
                        modules: {
                            include: {
                                tasks: true,
                            },
                        },
                    },
                },
            },
        });

        if (!project) {
            throw new NotFoundException('Project not found');
        }

        const stats = project.apps.map((app) => {
            const tasks = app.modules.flatMap((m) => m.tasks);
            const totalTasks = tasks.length;
            const doneTasks = tasks.filter((t) => t.status === 'DONE').length;
            const bugsCount = tasks.filter((t) => t.type === 'BUG').length;
            const progress =
                totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

            return {
                appId: app.id,
                appName: app.name,
                appType: app.type,
                totalTasks,
                doneTasks,
                progress,
                bugsCount, // Now counts tasks with type: BUG instead of bugSheets
            };
        });

        const overallProgress =
            stats.length > 0
                ? Math.round(stats.reduce((sum, s) => sum + s.progress, 0) / stats.length)
                : 0;

        return {
            id: project.id,
            name: project.name,
            overallProgress,
            apps: stats,
        };
    }

    /**
     * Check if user is a member of the project
     */
    async isUserMember(projectId: string, userId: string): Promise<boolean> {
        const member = await this.prisma.projectMember.findUnique({
            where: {
                projectId_userId: {
                    projectId,
                    userId: userId,
                },
            },
        });
        return !!member;
    }
}
