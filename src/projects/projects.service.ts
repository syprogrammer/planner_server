import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto, UpdateProjectDto } from './dto/project.dto';

@Injectable()
export class ProjectsService {
    constructor(private prisma: PrismaService) { }

    /**
     * Create a new project and add the creator as ADMIN member
     */
    async create(userId: string, dto: CreateProjectDto) {
        // Get or create organization for this user
        const org = await this.ensureOrganization(userId);

        // Get user info (we'll use userId as name if not available)
        const userName = 'Project Owner'; // Frontend should send this

        return this.prisma.project.create({
            data: {
                name: dto.name,
                description: dto.description,
                organizationId: org.id,
                clientOrgId: dto.clientOrgId,
                createdBy: userId,
                creatorName: userName,
                members: {
                    create: {
                        clerkUserId: userId,
                        name: userName,
                        role: 'ADMIN',
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
                        clerkUserId: userId,
                    },
                },
            },
            include: {
                apps: {
                    include: {
                        _count: { select: { modules: true, bugSheets: true } },
                    },
                },
                members: true,
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
                                            },
                                            orderBy: { order: 'asc' },
                                        },
                                        comments: {
                                            orderBy: { createdAt: 'asc' },
                                        },
                                    },
                                    orderBy: { order: 'asc' },
                                },
                                _count: { select: { tasks: true } },
                            },
                            orderBy: { order: 'asc' },
                        },
                        bugSheets: true,
                    },
                },
                members: true,
                organization: true,
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
                clientOrgId: dto.clientOrgId,
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
                        bugSheets: true,
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
            const progress =
                totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

            return {
                appId: app.id,
                appName: app.name,
                appType: app.type,
                totalTasks,
                doneTasks,
                progress,
                bugsCount: app.bugSheets.length,
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
                projectId_clerkUserId: {
                    projectId,
                    clerkUserId: userId,
                },
            },
        });
        return !!member;
    }

    /**
     * Ensure organization exists for user
     */
    private async ensureOrganization(clerkUserId: string) {
        // Use user ID as org ID for personal projects
        const org = await this.prisma.organization.findUnique({
            where: { clerkOrgId: clerkUserId },
        });

        if (!org) {
            return this.prisma.organization.create({
                data: {
                    clerkOrgId: clerkUserId,
                    name: 'Personal Organization',
                },
            });
        }

        return org;
    }
}
