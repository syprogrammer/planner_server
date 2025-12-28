import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';
import { Subject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export class CreateCommentDto {
    content: string;
    authorId: string;
    authorName: string;
    taskId?: string;
    bugSheetId?: string;
    // Optional: project members for @mention resolution
    projectMembers?: { clerkUserId: string; name: string }[];
}

export interface CommentEvent {
    type: 'new_comment';
    data: {
        id: string;
        content: string;
        authorId: string;
        authorName: string;
        taskId?: string;
        bugSheetId?: string;
        assignedTo?: string;
        projectId?: string;
        createdAt: Date;
    };
}

@Injectable()
export class CommentsService {
    private commentSubject = new Subject<CommentEvent>();

    constructor(
        private prisma: PrismaService,
        private notificationsService: NotificationsService,
    ) { }

    // Parse @mentions from comment content
    private parseMentions(content: string, projectMembers?: { clerkUserId: string; name: string }[]) {
        if (!projectMembers) return [];

        // Match @mentions (e.g., @JohnDoe or @john)
        const mentionRegex = /@(\w+)/g;
        const mentions: { clerkUserId: string; name: string }[] = [];
        let match;

        while ((match = mentionRegex.exec(content)) !== null) {
            const mentionedName = match[1].toLowerCase();
            const member = projectMembers.find(
                m => m.name.toLowerCase().includes(mentionedName) ||
                    m.name.toLowerCase().replace(/\s/g, '').includes(mentionedName)
            );
            if (member && !mentions.some(m => m.clerkUserId === member.clerkUserId)) {
                mentions.push(member);
            }
        }

        return mentions;
    }

    async create(dto: CreateCommentDto) {
        const comment = await this.prisma.comment.create({
            data: {
                content: dto.content,
                authorId: dto.authorId,
                authorName: dto.authorName,
                taskId: dto.taskId,
                bugSheetId: dto.bugSheetId,
            },
            include: {
                task: {
                    include: {
                        module: {
                            include: {
                                app: {
                                    include: { project: true },
                                },
                            },
                        },
                    },
                },
                bugSheet: {
                    include: {
                        app: {
                            include: { project: true },
                        },
                    },
                },
            },
        });

        // Emit SSE event for real-time notifications
        const projectId =
            comment.task?.module?.app?.project?.id ||
            comment.bugSheet?.app?.project?.id;
        const assignedTo = comment.task?.assignedTo || comment.bugSheet?.assignedTo;

        this.commentSubject.next({
            type: 'new_comment',
            data: {
                id: comment.id,
                content: comment.content,
                authorId: comment.authorId,
                authorName: comment.authorName,
                taskId: comment.taskId || undefined,
                bugSheetId: comment.bugSheetId || undefined,
                assignedTo: assignedTo || undefined,
                projectId,
                createdAt: comment.createdAt,
            },
        });

        // Parse @mentions and create notifications
        const mentions = this.parseMentions(dto.content, dto.projectMembers);
        const taskTitle = comment.task?.title || 'Task';

        for (const mentioned of mentions) {
            // Don't notify the author if they mention themselves
            if (mentioned.clerkUserId !== dto.authorId) {
                await this.notificationsService.createMentionNotification(
                    mentioned.clerkUserId,
                    mentioned.name,
                    comment.taskId || comment.bugSheetId || '',
                    taskTitle,
                    comment.id,
                    dto.authorId,
                    dto.authorName,
                    projectId,
                );
            }
        }

        return comment;
    }

    async findByTask(taskId: string) {
        return this.prisma.comment.findMany({
            where: { taskId },
            orderBy: { createdAt: 'asc' },
        });
    }

    async findByBugSheet(bugSheetId: string) {
        return this.prisma.comment.findMany({
            where: { bugSheetId },
            orderBy: { createdAt: 'asc' },
        });
    }

    async delete(id: string) {
        return this.prisma.comment.delete({
            where: { id },
        });
    }

    // SSE stream for a project - filtered by project ID
    getCommentStream(projectId: string): Observable<MessageEvent> {
        return this.commentSubject.asObservable().pipe(
            filter((event) => event.data.projectId === projectId),
            map(
                (event) =>
                    ({
                        data: JSON.stringify(event.data),
                    }) as MessageEvent,
            ),
        );
    }

    // SSE stream for a specific user - only comments on their assigned items
    getUserCommentStream(userId: string): Observable<MessageEvent> {
        return this.commentSubject.asObservable().pipe(
            filter(
                (event) =>
                    event.data.authorId !== userId && event.data.assignedTo === userId,
            ),
            map(
                (event) =>
                    ({
                        data: JSON.stringify(event.data),
                    }) as MessageEvent,
            ),
        );
    }
}
