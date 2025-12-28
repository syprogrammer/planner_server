import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthenticatedUser } from '../guards/clerk-auth.guard';

export const CurrentUser = createParamDecorator(
    (data: keyof AuthenticatedUser | undefined, ctx: ExecutionContext): AuthenticatedUser | string => {
        const request = ctx.switchToHttp().getRequest();
        const user = request.user as AuthenticatedUser;

        if (data) {
            return user[data];
        }

        return user;
    },
);
