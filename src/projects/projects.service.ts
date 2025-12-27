import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto, UpdateProjectDto } from './dto/project.dto';

@Injectable()
export class ProjectsService {
    constructor(private prisma: PrismaService) { }

    // Ensure organization exists (create if not)
    private async ensureOrganization(clerkOrgId: string) {
        const org = await this.prisma.organization.findUnique({
            where: { clerkOrgId },
        });

        if (!org) {
            return this.prisma.organization.create({
                data: {
                    clerkOrgId,
                    name: 'Default Organization', // Will be updated from Clerk
                },
            });
        }

        return org;
    }

    async create(clerkOrgId: string, dto: CreateProjectDto) {
        // Ensure organization exists
        const org = await this.ensureOrganization(clerkOrgId);

        return this.prisma.project.create({
            data: {
                name: dto.name,
                description: dto.description,
                organizationId: org.id,
                clientOrgId: dto.clientOrgId,
            },
            include: {
                apps: true,
                members: true,
            },
        });
    }

    async findAll(clerkOrgId: string) {
        // First try to find organization
        const org = await this.prisma.organization.findUnique({
            where: { clerkOrgId },
        });

        if (!org) {
            return []; // No org = no projects
        }

        return this.prisma.project.findMany({
            where: { organizationId: org.id },
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
        return this.prisma.project.findUnique({
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
            },
        });
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

    // Get project stats for client portal
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

        if (!project) return null;

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
}
