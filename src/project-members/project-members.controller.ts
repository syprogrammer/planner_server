import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProjectMembersService } from './project-members.service';
import { AddMemberDto, UpdateMemberRoleDto } from './dto/project-member.dto';
import { ProjectMemberGuard } from '../common/guards/project-member.guard';

@Controller('projects/:projectId/members')
@UseGuards(ProjectMemberGuard)
export class ProjectMembersController {
    constructor(private readonly projectMembersService: ProjectMembersService) { }

    @Post()
    addMember(@Param('projectId') projectId: string, @Body() dto: AddMemberDto) {
        return this.projectMembersService.addMember(projectId, dto);
    }

    @Get()
    findAll(@Param('projectId') projectId: string) {
        return this.projectMembersService.findAll(projectId);
    }

    @Patch(':userId')
    updateRole(
        @Param('projectId') projectId: string,
        @Param('userId') userId: string,
        @Body() dto: UpdateMemberRoleDto,
    ) {
        return this.projectMembersService.updateRole(projectId, userId, dto);
    }

    @Delete(':userId')
    removeMember(
        @Param('projectId') projectId: string,
        @Param('userId') userId: string,
    ) {
        return this.projectMembersService.removeMember(projectId, userId);
    }
}
