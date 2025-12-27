import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Subject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export class CreateCommentDto {
    content: string;
    authorId: string;
    authorName: string;
    taskId?: string;
    bugSheetId?: string;
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

    constructor(private prisma: PrismaService) { }

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
