import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { EntityType } from '@prisma/client';
import { ProjectMemberGuard } from '../common/guards/project-member.guard';
import { Resource } from '../common/decorators/resource.decorator';

@Controller()
export class ActivityController {
    constructor(private readonly activityService: ActivityService) { }

    /**
     * Get recent activity for a project
     * GET /projects/:projectId/activity
     */
    @Get('projects/:projectId/activity')
    @UseGuards(ProjectMemberGuard)
    async getProjectActivity(
        @Param('projectId') projectId: string,
        @Query('limit') limit?: string,
        @Query('cursor') cursor?: string,
    ) {
        const activities = await this.activityService.getProjectActivity(
            projectId,
            limit ? parseInt(limit, 10) : 50,
            cursor,
        );

        return activities.map((activity) => ({
            ...activity,
            message: ActivityService.formatActivityMessage(activity),
        }));
    }

    /**
     * Get activity history for a task
     * GET /tasks/:taskId/activity
     */
    @Get('tasks/:taskId/activity')
    @UseGuards(ProjectMemberGuard)
    @Resource('task')
    async getTaskActivity(
        @Param('taskId') taskId: string,
        @Query('limit') limit?: string,
    ) {
        const activities = await this.activityService.getEntityActivity(
            EntityType.TASK,
            taskId,
            limit ? parseInt(limit, 10) : 50,
        );

        return activities.map((activity) => ({
            ...activity,
            message: ActivityService.formatActivityMessage(activity),
        }));
    }

    /**
     * Get activity history for a bugsheet
     * GET /bug-sheets/:bugSheetId/activity
     */
    @Get('bug-sheets/:bugSheetId/activity')
    @UseGuards(ProjectMemberGuard)
    @Resource('bugSheet')
    async getBugSheetActivity(
        @Param('bugSheetId') bugSheetId: string,
        @Query('limit') limit?: string,
    ) {
        const activities = await this.activityService.getEntityActivity(
            EntityType.BUGSHEET,
            bugSheetId,
            limit ? parseInt(limit, 10) : 50,
        );

        return activities.map((activity) => ({
            ...activity,
            message: ActivityService.formatActivityMessage(activity),
        }));
    }

    /**
     * Get activity by user
     * GET /users/:userId/activity
     */
    @Get('users/:userId/activity')
    async getUserActivity(
        @Param('userId') userId: string,
        @Query('projectId') projectId?: string,
        @Query('limit') limit?: string,
    ) {
        const activities = await this.activityService.getUserActivity(
            userId,
            projectId,
            limit ? parseInt(limit, 10) : 50,
        );

        return activities.map((activity) => ({
            ...activity,
            message: ActivityService.formatActivityMessage(activity),
        }));
    }
}
