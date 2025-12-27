import { Controller, Get, Post, Body, Query, Headers } from '@nestjs/common';
import { UserVisitsService, RecordVisitDto } from './user-visits.service';

@Controller('visits')
export class UserVisitsController {
    constructor(private readonly userVisitsService: UserVisitsService) { }

    /**
     * Record a visit
     * POST /visits
     */
    @Post()
    async recordVisit(
        @Body() dto: Omit<RecordVisitDto, 'userId'>,
        @Headers('x-user-id') userId: string,
    ) {
        if (!userId) {
            return { error: 'User ID required' };
        }

        return this.userVisitsService.recordVisit({
            ...dto,
            userId,
        });
    }

    /**
     * Get recent visits
     * GET /visits/recent
     */
    @Get('recent')
    async getRecentVisits(
        @Headers('x-user-id') userId: string,
        @Query('limit') limit?: string,
    ) {
        if (!userId) {
            return [];
        }

        return this.userVisitsService.getRecentVisits(
            userId,
            limit ? parseInt(limit, 10) : 10,
        );
    }

    /**
     * Get frequently visited
     * GET /visits/frequent
     */
    @Get('frequent')
    async getFrequentlyVisited(
        @Headers('x-user-id') userId: string,
        @Query('limit') limit?: string,
    ) {
        if (!userId) {
            return [];
        }

        return this.userVisitsService.getFrequentlyVisited(
            userId,
            limit ? parseInt(limit, 10) : 4,
        );
    }
}
