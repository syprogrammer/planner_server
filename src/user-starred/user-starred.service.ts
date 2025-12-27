import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface StarItemDto {
    userId: string;
    projectId: string;
    projectName: string;
    appId?: string | null;
    appName?: string | null;
}

@Injectable()
export class UserStarredService {
    constructor(private prisma: PrismaService) { }

    /**
     * Star a project or app
     */
    async starItem(dto: StarItemDto) {
        // Check if already exists
        const existing = await this.prisma.userStarred.findFirst({
            where: {
                userId: dto.userId,
                projectId: dto.projectId,
                appId: dto.appId || null,
            },
        });

        if (existing) {
            return existing;
        }

        return this.prisma.userStarred.create({
            data: {
                userId: dto.userId,
                projectId: dto.projectId,
                projectName: dto.projectName,
                appId: dto.appId || null,
                appName: dto.appName || null,
            },
        });
    }

    /**
     * Unstar a project or app
     */
    async unstarItem(userId: string, projectId: string, appId?: string | null) {
        const item = await this.prisma.userStarred.findFirst({
            where: {
                userId,
                projectId,
                appId: appId || null,
            },
        });

        if (item) {
            return this.prisma.userStarred.delete({
                where: { id: item.id },
            });
        }

        return null;
    }

    /**
     * Toggle star status
     */
    async toggleStar(dto: StarItemDto) {
        const existing = await this.prisma.userStarred.findFirst({
            where: {
                userId: dto.userId,
                projectId: dto.projectId,
                appId: dto.appId || null,
            },
        });

        if (existing) {
            await this.prisma.userStarred.delete({
                where: { id: existing.id },
            });
            return { starred: false };
        } else {
            await this.starItem(dto);
            return { starred: true };
        }
    }

    /**
     * Check if item is starred
     */
    async isStarred(userId: string, projectId: string, appId?: string | null) {
        const item = await this.prisma.userStarred.findFirst({
            where: {
                userId,
                projectId,
                appId: appId || null,
            },
        });
        return !!item;
    }

    /**
     * Get all starred items for a user
     */
    async getStarredItems(userId: string) {
        return this.prisma.userStarred.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    }
}
