import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ActivityAction, EntityType } from '@prisma/client';

export interface LogActivityDto {
    action: ActivityAction;
    field?: string;
    oldValue?: string;
    newValue?: string;
    userId: string;
    userName: string;
    entityType: EntityType;
    entityId: string;
    entityTitle: string;
    projectId: string;
}

@Injectable()
export class ActivityService {
    constructor(private prisma: PrismaService) { }

    /**
     * Log an activity event
     */
    async logActivity(dto: LogActivityDto) {
        return this.prisma.activityLog.create({
            data: {
                action: dto.action,
                field: dto.field,
                oldValue: dto.oldValue,
                newValue: dto.newValue,
                userId: dto.userId,
                userName: dto.userName,
                entityType: dto.entityType,
                entityId: dto.entityId,
                entityTitle: dto.entityTitle,
                projectId: dto.projectId,
            },
        });
    }

    /**
     * Get recent activity for a project
     */
    async getProjectActivity(projectId: string, limit = 50, cursor?: string) {
        return this.prisma.activityLog.findMany({
            where: { projectId },
            orderBy: { createdAt: 'desc' },
            take: limit,
            ...(cursor && {
                skip: 1,
                cursor: { id: cursor },
            }),
        });
    }

    /**
     * Get activity history for a specific entity (task or bugsheet)
     */
    async getEntityActivity(entityType: EntityType, entityId: string, limit = 50) {
        return this.prisma.activityLog.findMany({
            where: {
                entityType,
                entityId,
            },
            orderBy: { createdAt: 'desc' },
            take: limit,
        });
    }

    /**
     * Get activity by user
     */
    async getUserActivity(userId: string, projectId?: string, limit = 50) {
        return this.prisma.activityLog.findMany({
            where: {
                userId,
                ...(projectId && { projectId }),
            },
            orderBy: { createdAt: 'desc' },
            take: limit,
        });
    }

    /**
     * Helper to format action for display
     */
    static formatActivityMessage(activity: {
        action: ActivityAction;
        field?: string | null;
        oldValue?: string | null;
        newValue?: string | null;
        userName: string;
        entityTitle: string;
    }): string {
        const { action, field, oldValue, newValue, userName, entityTitle } = activity;

        switch (action) {
            case 'CREATED':
                return `${userName} created "${entityTitle}"`;
            case 'DELETED':
                return `${userName} deleted "${entityTitle}"`;
            case 'STATUS_CHANGED':
                return `${userName} updated field "status" on "${entityTitle}" from ${oldValue} to ${newValue}`;
            case 'ASSIGNED':
                return `${userName} assigned "${entityTitle}" to ${newValue}`;
            case 'UNASSIGNED':
                return `${userName} unassigned ${oldValue} from "${entityTitle}"`;
            case 'COMMENTED':
                return `${userName} commented on "${entityTitle}"`;
            case 'PRIORITY_CHANGED':
                return `${userName} changed priority on "${entityTitle}" from ${oldValue} to ${newValue}`;
            case 'UPDATED':
                return `${userName} updated field "${field}" on "${entityTitle}"`;
            default:
                return `${userName} made changes to "${entityTitle}"`;
        }
    }
}
