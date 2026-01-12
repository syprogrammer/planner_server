import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    Query,
    UseGuards,
} from '@nestjs/common';
import { LabelsService } from './labels.service';
import { CreateLabelDto, UpdateLabelDto } from './dto/label.dto';
import { ProjectMemberGuard } from '../common/guards/project-member.guard';

@Controller('labels')
@UseGuards(ProjectMemberGuard)
export class LabelsController {
    constructor(private readonly labelsService: LabelsService) { }

    /**
     * Create a new label
     * POST /labels
     */
    @Post()
    create(@Body() dto: CreateLabelDto) {
        return this.labelsService.create(dto);
    }

    /**
     * Get all labels for a project
     * GET /labels?projectId=xxx
     */
    @Get()
    findByProject(@Query('projectId') projectId: string) {
        return this.labelsService.findByProject(projectId);
    }

    /**
     * Get a single label
     * GET /labels/:id
     */
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.labelsService.findOne(id);
    }

    /**
     * Update a label
     * PUT /labels/:id
     */
    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateLabelDto) {
        return this.labelsService.update(id, dto);
    }

    /**
     * Delete a label
     * DELETE /labels/:id
     */
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.labelsService.delete(id);
    }

    /**
     * Add a label to a task
     * POST /labels/:labelId/tasks/:taskId
     */
    @Post(':labelId/tasks/:taskId')
    addToTask(
        @Param('labelId') labelId: string,
        @Param('taskId') taskId: string,
    ) {
        return this.labelsService.addLabelToTask(taskId, labelId);
    }

    /**
     * Remove a label from a task
     * DELETE /labels/:labelId/tasks/:taskId
     */
    @Delete(':labelId/tasks/:taskId')
    removeFromTask(
        @Param('labelId') labelId: string,
        @Param('taskId') taskId: string,
    ) {
        return this.labelsService.removeLabelFromTask(taskId, labelId);
    }

    /**
     * Get all labels for a task
     * GET /labels/task/:taskId
     */
    @Get('task/:taskId')
    getTaskLabels(@Param('taskId') taskId: string) {
        return this.labelsService.getTaskLabels(taskId);
    }
}
