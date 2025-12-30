import { Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ClerkAuthGuard, type AuthenticatedUser } from '../common/guards/clerk-auth.guard';
import { CurrentUser } from '../common/decorators';

@Controller('users')
@UseGuards(ClerkAuthGuard)
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get('search')
    search(@Query('query') query: string) {
        return this.usersService.searchUsers(query);
    }

    @Post('sync-org')
    syncOrg(@CurrentUser() user: AuthenticatedUser) {
        return this.usersService.ensureDefaultOrgMembership(user.userId);
    }
}
