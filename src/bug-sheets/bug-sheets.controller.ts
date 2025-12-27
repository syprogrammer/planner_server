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
import { BugSheetsService, CreateBugSheetDto, UpdateBugSheetDto } from './bug-sheets.service';
import { Status } from '@prisma/client';

@Controller('bug-sheets')
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
    findOne(@Param('id') id: string) {
        return this.bugSheetsService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateBugSheetDto) {
        return this.bugSheetsService.update(id, dto);
    }

    @Patch(':id/status')
    updateStatus(
        @Param('id') id: string,
        @Body() body: { field: 'devStatus' | 'qaStatus'; status: Status },
    ) {
        return this.bugSheetsService.updateStatus(id, body.field, body.status);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.bugSheetsService.delete(id);
    }
}
