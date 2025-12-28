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
    UseGuards,
} from '@nestjs/common';
import { BugSheetsService } from './bug-sheets.service';
import { CreateBugSheetDto, UpdateBugSheetDto } from './dto/bug-sheet.dto';

import { Status } from '@prisma/client';
import { ProjectMemberGuard } from '../common/guards/project-member.guard';
import { Resource } from '../common/decorators/resource.decorator';

@Controller('bug-sheets')
@UseGuards(ProjectMemberGuard)
export class BugSheetsController {
    constructor(private readonly bugSheetsService: BugSheetsService) { }

    @Post()
    create(@Body() dto: CreateBugSheetDto) {
        return this.bugSheetsService.create(dto);
    }

    @Get()
    findByApp(@Query('appId') appId: string) {
        return this.bugSheetsService.findByApp(appId);
    }

    @Get(':id')
    @Resource('bugSheet')
    findOne(@Param('id') id: string) {
        return this.bugSheetsService.findOne(id);
    }

    @Put(':id')
    @Resource('bugSheet')
    update(@Param('id') id: string, @Body() dto: UpdateBugSheetDto) {
        return this.bugSheetsService.update(id, dto);
    }

    @Patch(':id/status')
    @Resource('bugSheet')
    updateStatus(
        @Param('id') id: string,
        @Body() body: { field: 'devStatus' | 'qaStatus'; status: Status },
    ) {
        return this.bugSheetsService.updateStatus(id, body.field, body.status);
    }

    @Delete(':id')
    @Resource('bugSheet')
    delete(@Param('id') id: string) {
        return this.bugSheetsService.delete(id);
    }
}
