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
import { AppsService } from './apps.service';
import { CreateAppDto, UpdateAppDto } from './dto/app.dto';

import { ProjectMemberGuard } from '../common/guards/project-member.guard';
import { Resource } from '../common/decorators/resource.decorator';

@Controller('apps')
@UseGuards(ProjectMemberGuard)
export class AppsController {
    constructor(private readonly appsService: AppsService) { }

    @Post()
    create(@Body() dto: CreateAppDto) {
        return this.appsService.create(dto);
    }

    @Get()
    findByProject(@Query('projectId') projectId: string) {
        return this.appsService.findByProject(projectId);
    }

    @Get(':id')
    @Resource('app')
    findOne(@Param('id') id: string) {
        return this.appsService.findOne(id);
    }

    @Put(':id')
    @Resource('app')
    update(@Param('id') id: string, @Body() dto: UpdateAppDto) {
        return this.appsService.update(id, dto);
    }

    @Delete(':id')
    @Resource('app')
    delete(@Param('id') id: string) {
        return this.appsService.delete(id);
    }
}
