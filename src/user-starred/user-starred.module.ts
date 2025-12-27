import { Module } from '@nestjs/common';
import { UserStarredService } from './user-starred.service';
import { UserStarredController } from './user-starred.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [UserStarredController],
    providers: [UserStarredService],
    exports: [UserStarredService],
})
export class UserStarredModule { }
