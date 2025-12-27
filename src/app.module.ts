import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProjectsModule } from './projects/projects.module';
import { AppsModule } from './apps/apps.module';
import { TasksModule } from './tasks/tasks.module';
import { BugSheetsModule } from './bug-sheets/bug-sheets.module';
import { CommentsModule } from './comments/comments.module';
import { ModulesModule } from './modules/modules.module';
import { ActivityModule } from './activity/activity.module';
import { UserVisitsModule } from './user-visits/user-visits.module';
import { UserStarredModule } from './user-starred/user-starred.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available throughout the app
      envFilePath: '.env',
    }),
    PrismaModule,
    ProjectsModule,
    AppsModule,
    ModulesModule,
    TasksModule,
    BugSheetsModule,
    CommentsModule,
    ActivityModule,
    UserVisitsModule,
    UserStarredModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }


