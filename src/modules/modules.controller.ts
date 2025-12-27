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
import { ModulesService, CreateModuleDto, UpdateModuleDto } from './modules.service';

@Controller('modules')
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
    findOne(@Param('id') id: string) {
        return this.modulesService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateModuleDto) {
        return this.modulesService.update(id, dto);
    }

    @Post('reorder')
    reorder(@Body() body: { appId: string; moduleIds: string[] }) {
        return this.modulesService.reorder(body.appId, body.moduleIds);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.modulesService.delete(id);
    }
}
