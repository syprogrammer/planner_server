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
import { AppsService, CreateAppDto, UpdateAppDto } from './apps.service';

@Controller('apps')
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
    findOne(@Param('id') id: string) {
        return this.appsService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateAppDto) {
        return this.appsService.update(id, dto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.appsService.delete(id);
    }
}
