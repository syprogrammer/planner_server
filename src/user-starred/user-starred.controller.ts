import { Controller, Get, Post, Delete, Body, Query, Headers } from '@nestjs/common';
import { UserStarredService } from './user-starred.service';

@Controller('starred')
export class UserStarredController {
    constructor(private readonly userStarredService: UserStarredService) { }

    /**
     * Star an item
     * POST /starred
     */
    @Post()
    async starItem(
        @Body() dto: { projectId: string; projectName: string; appId?: string; appName?: string },
        @Headers('x-user-id') userId: string,
    ) {
        if (!userId) {
            return { error: 'User ID required' };
        }

        return this.userStarredService.starItem({
            ...dto,
            userId,
        });
    }

    /**
     * Toggle star status
     * POST /starred/toggle
     */
    @Post('toggle')
    async toggleStar(
        @Body() dto: { projectId: string; projectName: string; appId?: string; appName?: string },
        @Headers('x-user-id') userId: string,
    ) {
        if (!userId) {
            return { error: 'User ID required' };
        }

        return this.userStarredService.toggleStar({
            ...dto,
            userId,
        });
    }

    /**
     * Unstar an item
     * DELETE /starred
     */
    @Delete()
    async unstarItem(
        @Query('projectId') projectId: string,
        @Query('appId') appId?: string,
        @Headers('x-user-id') userId?: string,
    ) {
        if (!userId || !projectId) {
            return { error: 'User ID and Project ID required' };
        }

        return this.userStarredService.unstarItem(userId, projectId, appId);
    }

    /**
     * Get all starred items
     * GET /starred
     */
    @Get()
    async getStarredItems(@Headers('x-user-id') userId: string) {
        if (!userId) {
            return [];
        }

        return this.userStarredService.getStarredItems(userId);
    }

    /**
     * Check if item is starred
     * GET /starred/check
     */
    @Get('check')
    async checkStarred(
        @Query('projectId') projectId: string,
        @Query('appId') appId?: string,
        @Headers('x-user-id') userId?: string,
    ) {
        if (!userId || !projectId) {
            return { starred: false };
        }

        const starred = await this.userStarredService.isStarred(userId, projectId, appId);
        return { starred };
    }
}
