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
import { ModulesService } from './modules.service';
import { CreateModuleDto, UpdateModuleDto } from './dto/module.dto';

import { ProjectMemberGuard } from '../common/guards/project-member.guard';
import { Resource } from '../common/decorators/resource.decorator';

@Controller('modules')
@UseGuards(ProjectMemberGuard)
export class ModulesController {
    constructor(private readonly modulesService: ModulesService) { }

    @Post()
    create(@Body() dto: CreateModuleDto) {
        return this.modulesService.create(dto);
    }

    @Get()
    findByApp(@Query('appId') appId: string) {
        return this.modulesService.findByApp(appId);
    }

    @Get(':id')
    @Resource('module')
    findOne(@Param('id') id: string) {
        return this.modulesService.findOne(id);
    }

    @Put(':id')
    @Resource('module')
    update(@Param('id') id: string, @Body() dto: UpdateModuleDto) {
        return this.modulesService.update(id, dto);
    }

    @Post('reorder')
    reorder(@Body() body: { appId: string; moduleIds: string[] }) {
        return this.modulesService.reorder(body.appId, body.moduleIds);
    }

    @Delete(':id')
    @Resource('module')
    delete(@Param('id') id: string) {
        return this.modulesService.delete(id);
    }
}
