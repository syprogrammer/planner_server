import { Module } from '@nestjs/common';
import { UserVisitsService } from './user-visits.service';
import { UserVisitsController } from './user-visits.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [UserVisitsController],
    providers: [UserVisitsService],
    exports: [UserVisitsService],
})
export class UserVisitsModule { }
