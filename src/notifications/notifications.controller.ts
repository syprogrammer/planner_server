import { Controller, Get, Post, Param, Query, Sse, Req, MessageEvent } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Observable, map } from 'rxjs';
import { Request } from 'express';

@Controller('notifications')
export class NotificationsController {
    constructor(private readonly notificationsService: NotificationsService) { }

    // SSE endpoint for real-time notifications
    @Sse('stream')
    stream(@Query('userId') userId: string): Observable<MessageEvent> {
        if (!userId) {
            throw new Error('userId is required');
        }

        const subject = this.notificationsService.getNotificationStream(userId);

        return subject.pipe(
            map((event) => ({
                data: JSON.stringify(event.data),
                type: 'notification',
            }))
        );
    }

    // Get all notifications for a user
    @Get()
    async findAll(
        @Query('userId') userId: string,
        @Query('unreadOnly') unreadOnly?: string,
    ) {
        if (!userId) {
            throw new Error('userId is required');
        }
        return this.notificationsService.findByUser(userId, unreadOnly === 'true');
    }

    // Get unread count
    @Get('unread-count')
    async getUnreadCount(@Query('userId') userId: string) {
        if (!userId) {
            throw new Error('userId is required');
        }
        const count = await this.notificationsService.getUnreadCount(userId);
        return { count };
    }

    // Mark single notification as read
    @Post(':id/read')
    async markAsRead(
        @Param('id') id: string,
        @Query('userId') userId: string,
    ) {
        if (!userId) {
            throw new Error('userId is required');
        }
        await this.notificationsService.markAsRead(id, userId);
        return { success: true };
    }

    // Mark all as read
    @Post('mark-all-read')
    async markAllAsRead(@Query('userId') userId: string) {
        if (!userId) {
            throw new Error('userId is required');
        }
        await this.notificationsService.markAllAsRead(userId);
        return { success: true };
    }
}
