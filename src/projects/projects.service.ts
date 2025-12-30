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
        // Enforce that the organization must exist
        const org = await this.prisma.organization.findUnique({
            where: { clerkOrgId: dto.organizationId },
        });

        if (!org) {
            // If the org doesn't exist in our DB, we check if it's a valid Clerk Org (implying we need to sync it)
            // But for SaaS best practice, we assume orgs are synced or created via proper flows.
            // If strictly disabling "Personal Orgs", we fail here if it's not a real org.
            // For now, consistent with "Backend Only" flow, we fail if not found or blindly link it if we trust the FE.

            // However, to permit "First Time Sync" (if a user creates an org in Clerk and then creates a project),
            // we might want to create the Org record if it's new.
            // BUT, the goal is "Customers should NOT create orgs". 
            // So we assume the Admin created it and it exists in our DB.
            throw new NotFoundException('Organization not found. Please contact support if this is an error.');
        }

        // Check if user is member of this org (implicitly or explicitly)
        // This is a naive check; ideally checking Clerk API or our local sync of OrgMembers

        const userName = 'Project Owner'; // TODO: fetch from clerk if needed

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

}
