import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationType } from '@prisma/client';
import { Subject } from 'rxjs';

export interface CreateNotificationDto {
    userId: string;
    type: NotificationType;
    title: string;
    message: string;
    projectId?: string;
    taskId?: string;
    commentId?: string;
    actorId: string;
    actorName: string;
}

// SSE Event structure
export interface NotificationEvent {
    type: 'notification';
    data: any;
}

@Injectable()
export class NotificationsService {
    // Subject for SSE broadcasting
    private notificationSubjects = new Map<string, Subject<NotificationEvent>>();

    constructor(private prisma: PrismaService) { }

    // Get or create a subject for a user
    getNotificationStream(userId: string): Subject<NotificationEvent> {
        if (!this.notificationSubjects.has(userId)) {
            this.notificationSubjects.set(userId, new Subject<NotificationEvent>());
        }
        return this.notificationSubjects.get(userId)!;
    }

    // Create a notification and broadcast via SSE
    async create(dto: CreateNotificationDto) {
        const notification = await this.prisma.notification.create({
            data: {
                userId: dto.userId,
                type: dto.type,
                title: dto.title,
                message: dto.message,
                projectId: dto.projectId,
                taskId: dto.taskId,
                commentId: dto.commentId,
                actorId: dto.actorId,
                actorName: dto.actorName,
            },
        });

        // Broadcast to user's SSE stream if connected
        const subject = this.notificationSubjects.get(dto.userId);
        if (subject) {
            subject.next({ type: 'notification', data: notification });
        }

        return notification;
    }

    // Create mention notification
    async createMentionNotification(
        mentionedUserId: string,
        mentionedUserName: string,
        taskId: string,
        taskTitle: string,
        commentId: string,
        actorId: string,
        actorName: string,
        projectId?: string,
    ) {
        return this.create({
            userId: mentionedUserId,
            type: 'MENTION',
            title: `${actorName} mentioned you`,
            message: `You were mentioned in a comment on "${taskTitle}"`,
            projectId,
            taskId,
            commentId,
            actorId,
            actorName,
        });
    }

    // Get notifications for a user
    async findByUser(userId: string, unreadOnly = false) {
        return this.prisma.notification.findMany({
            where: {
                userId,
                ...(unreadOnly ? { read: false } : {}),
            },
            orderBy: { createdAt: 'desc' },
            take: 50,
        });
    }

    // Get unread count
    async getUnreadCount(userId: string) {
        return this.prisma.notification.count({
            where: { userId, read: false },
        });
    }

    // Mark as read
    async markAsRead(id: string, userId: string) {
        return this.prisma.notification.updateMany({
            where: { id, userId },
            data: { read: true },
        });
    }

    // Mark all as read
    async markAllAsRead(userId: string) {
        return this.prisma.notification.updateMany({
            where: { userId, read: false },
            data: { read: true },
        });
    }

    // Cleanup when user disconnects from SSE
    removeNotificationStream(userId: string) {
        const subject = this.notificationSubjects.get(userId);
        if (subject) {
            subject.complete();
            this.notificationSubjects.delete(userId);
        }
    }
}
