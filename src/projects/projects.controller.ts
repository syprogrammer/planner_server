import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    UseGuards,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto, UpdateProjectDto } from './dto/project.dto';
import { ProjectMemberGuard } from '../common/guards';
import { CurrentUser } from '../common/decorators';
import type { AuthenticatedUser } from '../common/guards/clerk-auth.guard';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) { }

    @Post()
    create(
        @CurrentUser() user: AuthenticatedUser,
        @Body() dto: CreateProjectDto,
    ) {
        // We now enforce that dto.organizationId is present and valid in the service
        return this.projectsService.create(user.userId, dto);
    }

    @Get()
    findAll(@CurrentUser() user: AuthenticatedUser) {
        return this.projectsService.findAllByUser(user.userId);
    }

    @Get(':id')
    @UseGuards(ProjectMemberGuard)
    findOne(@Param('id') id: string) {
        return this.projectsService.findOne(id);
    }

    @Get(':id/stats')
    @UseGuards(ProjectMemberGuard)
    getStats(@Param('id') id: string) {
        return this.projectsService.getProjectStats(id);
    }

    @Put(':id')
    @UseGuards(ProjectMemberGuard)
    update(@Param('id') id: string, @Body() dto: UpdateProjectDto) {
        return this.projectsService.update(id, dto);
    }

    @Delete(':id')
    @UseGuards(ProjectMemberGuard)
    delete(@Param('id') id: string) {
        return this.projectsService.delete(id);
    }
}
