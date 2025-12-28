import { Injectable, CanActivate, ExecutionContext, ForbiddenException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthenticatedUser } from './clerk-auth.guard';

@Injectable()
export class ProjectMemberGuard implements CanActivate {
    constructor(private prisma: PrismaService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const user = request.user as AuthenticatedUser;

        if (!user?.userId) {
            throw new ForbiddenException('User not authenticated');
        }

        // Get projectId from route params
        const projectId = request.params.id || request.params.projectId;

        if (!projectId) {
            // No project ID in route, skip this guard
            return true;
        }

        // Check if project exists
        const project = await this.prisma.project.findUnique({
            where: { id: projectId },
        });

        if (!project) {
            throw new NotFoundException('Project not found');
        }

        // Check if user is a member of this project
        const member = await this.prisma.projectMember.findUnique({
            where: {
                projectId_clerkUserId: {
                    projectId,
                    clerkUserId: user.userId,
                },
            },
        });

        if (!member) {
            throw new ForbiddenException('You are not a member of this project');
        }

        // Attach member info to request for role-based checks
        request.projectMember = member;

        return true;
    }
}
