import { Module } from '@nestjs/common';
import { BugSheetsController } from './bug-sheets.controller';
import { BugSheetsService } from './bug-sheets.service';

@Module({
    controllers: [BugSheetsController],
    providers: [BugSheetsService],
    exports: [BugSheetsService],
})
export class BugSheetsModule { }
