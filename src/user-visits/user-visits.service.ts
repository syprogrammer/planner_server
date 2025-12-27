import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface RecordVisitDto {
    userId: string;
    projectId: string;
    projectName: string;
    appId?: string;
    appName?: string;
    viewType?: string;
}

@Injectable()
export class UserVisitsService {
    constructor(private prisma: PrismaService) { }

    private readonly MAX_VISITS_PER_USER = 10;

    /**
     * Record a user visit (keeps only last 10 per user)
     */
    async recordVisit(dto: RecordVisitDto) {
        // Create the new visit
        const visit = await this.prisma.userVisit.create({
            data: {
                userId: dto.userId,
                projectId: dto.projectId,
                projectName: dto.projectName,
                appId: dto.appId,
                appName: dto.appName,
                viewType: dto.viewType,
            },
        });

        // Delete old visits beyond the limit
        const userVisits = await this.prisma.userVisit.findMany({
            where: { userId: dto.userId },
            orderBy: { visitedAt: 'desc' },
            skip: this.MAX_VISITS_PER_USER,
            select: { id: true },
        });

        if (userVisits.length > 0) {
            await this.prisma.userVisit.deleteMany({
                where: {
                    id: { in: userVisits.map((v) => v.id) },
                },
            });
        }

        return visit;
    }

    /**
     * Get user's recent visits
     */
    async getRecentVisits(userId: string, limit = 10) {
        return this.prisma.userVisit.findMany({
            where: { userId },
            orderBy: { visitedAt: 'desc' },
            take: limit,
        });
    }

    /**
     * Get user's frequently visited (top N by count)
     */
    async getFrequentlyVisited(userId: string, limit = 4) {
        // Group by projectId and count visits
        const visits = await this.prisma.userVisit.groupBy({
            by: ['projectId', 'projectName'],
            where: { userId },
            _count: { projectId: true },
            orderBy: { _count: { projectId: 'desc' } },
            take: limit,
        });

        return visits.map((v) => ({
            projectId: v.projectId,
            projectName: v.projectName,
            visitCount: v._count.projectId,
        }));
    }
}
