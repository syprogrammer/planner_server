import { Module } from '@nestjs/common';
// import { UsersController } from './users.controller';
// import { UsersService } from './users.service';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    imports: [ConfigModule],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule { }
