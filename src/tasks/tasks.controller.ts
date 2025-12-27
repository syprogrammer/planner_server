import {
    Controller,
    Get,
    Post,
    Put,
    Patch,
    Delete,
    Body,
    Param,
    Query,
    Headers,
} from '@nestjs/common';
import { TasksService, CreateTaskDto, UpdateTaskDto, ActivityContext } from './tasks.service';
import { Status } from '@prisma/client';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    /**
     * Extract activity context from request headers
     */
    private getActivityContext(
        userId?: string,
        userName?: string,
    ): ActivityContext | undefined {
        if (userId && userName) {
            return { userId, userName };
        }
        return undefined;
    }

    @Post()
    create(
        @Body() dto: CreateTaskDto,
        @Headers('x-user-id') userId?: string,
        @Headers('x-user-name') userName?: string,
    ) {
        return this.tasksService.create(dto, this.getActivityContext(userId, userName));
    }

    @Get()
    findByModule(@Query('moduleId') moduleId: string) {
        return this.tasksService.findByModule(moduleId);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.tasksService.findOne(id);
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() dto: UpdateTaskDto,
        @Headers('x-user-id') userId?: string,
        @Headers('x-user-name') userName?: string,
    ) {
        return this.tasksService.update(id, dto, this.getActivityContext(userId, userName));
    }

    @Patch(':id/status')
    updateStatus(
        @Param('id') id: string,
        @Body() body: { status: Status },
        @Headers('x-user-id') userId?: string,
        @Headers('x-user-name') userName?: string,
    ) {
        return this.tasksService.updateStatus(id, body.status, this.getActivityContext(userId, userName));
    }

    @Post('reorder')
    reorder(@Body() body: { moduleId: string; taskIds: string[] }) {
        return this.tasksService.reorder(body.moduleId, body.taskIds);
    }

    @Delete(':id')
    delete(
        @Param('id') id: string,
        @Headers('x-user-id') userId?: string,
        @Headers('x-user-name') userName?: string,
    ) {
        return this.tasksService.delete(id, this.getActivityContext(userId, userName));
    }
}
