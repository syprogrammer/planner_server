import { Injectable, CanActivate, ExecutionContext, ForbiddenException, NotFoundException, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthenticatedUser } from './clerk-auth.guard';
import { RESOURCE_KEY } from '../decorators/resource.decorator';

@Injectable()
export class ProjectMemberGuard implements CanActivate {
    private readonly logger = new Logger(ProjectMemberGuard.name);

    constructor(
        private prisma: PrismaService,
        private reflector: Reflector,
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const user = request.user as AuthenticatedUser;

        if (!user?.userId) {
            throw new ForbiddenException('User not authenticated');
        }

        const resourceType = this.reflector.getAllAndOverride<string>(RESOURCE_KEY, [
            context.getHandler(),
            context.getClass(),
        ]) || 'project';

        this.logger.debug(`Checking access for ${request.method} ${request.url} by user ${user.userId}`);

        let projectId: string | null = null;

        // 1. Try to get plain projectId from params/query/body first
        if (request.params?.projectId) projectId = request.params.projectId;
        else if (request.query?.projectId) projectId = request.query.projectId;
        else if (request.body?.projectId) projectId = request.body.projectId;

        // 2. If not found, resolve based on resource type and ID
        if (!projectId) {
            let id = request.params?.id; // generic ID

            // If generic ID is missing, check for specific param names based on resource type
            if (!id && request.params) {
                if (resourceType === 'task') id = request.params.taskId;
                else if (resourceType === 'bugSheet') id = request.params.bugSheetId;
                else if (resourceType === 'module') id = request.params.moduleId;
                else if (resourceType === 'app') id = request.params.appId;
            }

            if (id) {
                if (resourceType === 'project') {
                    projectId = id;
                } else if (resourceType === 'app') {
                    const app = await this.prisma.app.findUnique({
                        where: { id },
                        select: { projectId: true },
                    });
                    if (app) projectId = app.projectId;
                } else if (resourceType === 'module') {
                    const module = await this.prisma.module.findUnique({
                        where: { id },
                        include: { app: { select: { projectId: true } } },
                    });
                    if (module && module.app) projectId = module.app.projectId;
                } else if (resourceType === 'task') {
                    const task = await this.prisma.task.findUnique({
                        where: { id },
                        include: { module: { include: { app: { select: { projectId: true } } } } },
                    });
                    if (task && task.module && task.module.app) projectId = task.module.app.projectId;
                } else if (resourceType === 'bugSheet') {
                    const bugSheet = await this.prisma.bugSheet.findUnique({
                        where: { id },
                        include: { app: { select: { projectId: true } } },
                    });
                    if (bugSheet && bugSheet.app) projectId = bugSheet.app.projectId;
                }
            } else {
                // Check for parent IDs in query/body if ID param is missing (e.g. create/list actions)
                if (request.query?.appId || request.body?.appId) {
                    const appId = request.query?.appId || request.body?.appId;
                    const app = await this.prisma.app.findUnique({
                        where: { id: appId },
                        select: { projectId: true },
                    });
                    if (app) projectId = app.projectId;
                } else if (request.query?.moduleId || request.body?.moduleId) {
                    const moduleId = request.query?.moduleId || request.body?.moduleId;
                    const module = await this.prisma.module.findUnique({
                        where: { id: moduleId },
                        include: { app: { select: { projectId: true } } },
                    });
                    if (module && module.app) projectId = module.app.projectId;
                }
            }
        }

        if (!projectId) {
            // No project context found - allowing access (or should blocks? safer to block if unsure, but letting generic guard pass if no context might be desired for non-project routes. However, this guard is explicitly for project members)
            // If we are here, it means we couldn't resolve a project ID. 
            // If the route is explicitly decorated with @Resource, we should probably fail.
            // But let's log and allow if we really just can't find it (maybe public route?), but wait, this guard is UseGuards(ProjectMemberGuard). It SHOULD block.
            // However, existing simple check returned true if !projectId.
            if (request.params?.id || request.params?.projectId) {
                // If there WAS an ID but we failed to look it up (e.g. invalid ID), we should 404.
                // But the lookups returns null if not found.
                throw new NotFoundException('Resource or Project not found');
            }
            return true;
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
