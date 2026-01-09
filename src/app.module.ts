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
import { ProjectMembersModule } from './project-members/project-members.module';
import { NotificationsModule } from './notifications/notifications.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule, JwtAuthGuard } from './auth';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available throughout the app
      envFilePath: '.env',
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000, // Time to live in milliseconds (1 minute)
        limit: 100, // Number of requests per TTL
      },
    ]),
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
    ProjectMembersModule,
    NotificationsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // Global rate limiting
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    // Global authentication - all routes require auth unless marked with @Public()
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule { }
