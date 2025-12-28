import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    Query,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto, UpdateProjectDto } from './dto/project.dto';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) { }

    @Post()
    create(@Query('orgId') orgId: string, @Query('userId') userId: string, @Query('userName') userName: string, @Body() dto: CreateProjectDto) {
        return this.projectsService.create(orgId, userId, userName, dto);
    }

    @Get()
    findAll(@Query('orgId') orgId: string) {
        return this.projectsService.findAll(orgId);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.projectsService.findOne(id);
    }

    @Get(':id/stats')
    getStats(@Param('id') id: string) {
        return this.projectsService.getProjectStats(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateProjectDto) {
        return this.projectsService.update(id, dto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.projectsService.delete(id);
    }
}
