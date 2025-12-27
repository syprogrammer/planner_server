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
} from '@nestjs/common';
import { TasksService, CreateTaskDto, UpdateTaskDto } from './tasks.service';
import { Status } from '@prisma/client';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Post()
    create(@Body() dto: CreateTaskDto) {
        return this.tasksService.create(dto);
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
    update(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
        return this.tasksService.update(id, dto);
    }

    @Patch(':id/status')
    updateStatus(
        @Param('id') id: string,
        @Body() body: { field: string; status: Status },
    ) {
        return this.tasksService.updateStatus(id, body.field, body.status);
    }

    @Patch(':id/move')
    moveToStatus(@Param('id') id: string, @Body() body: { status: Status }) {
        return this.tasksService.moveToStatus(id, body.status);
    }

    @Post('reorder')
    reorder(@Body() body: { moduleId: string; taskIds: string[] }) {
        return this.tasksService.reorder(body.moduleId, body.taskIds);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.tasksService.delete(id);
    }
}
