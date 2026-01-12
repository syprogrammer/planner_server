import {
    Controller,
    Get,
    Post,
    Delete,
    Body,
    Param,
    Sse,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/comment.dto';


@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) { }

    @Post()
    create(@Body() dto: CreateCommentDto) {
        return this.commentsService.create(dto);
    }

    @Get('task/:taskId')
    findByTask(@Param('taskId') taskId: string) {
        return this.commentsService.findByTask(taskId);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.commentsService.delete(id);
    }

    // SSE endpoint for real-time comment notifications
    @Sse('stream/project/:projectId')
    streamByProject(
        @Param('projectId') projectId: string,
    ): Observable<MessageEvent> {
        return this.commentsService.getCommentStream(projectId);
    }

    // SSE endpoint for user-specific notifications
    @Sse('stream/user/:userId')
    streamByUser(@Param('userId') userId: string): Observable<MessageEvent> {
        return this.commentsService.getUserCommentStream(userId);
    }
}
