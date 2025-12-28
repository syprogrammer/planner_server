import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { createClerkClient } from '@clerk/backend';
import { ConfigService } from '@nestjs/config';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

export interface AuthenticatedUser {
    userId: string;
}

@Injectable()
export class ClerkAuthGuard implements CanActivate {
    private clerk;

    constructor(
        private configService: ConfigService,
        private reflector: Reflector,
    ) {
        this.clerk = createClerkClient({
            secretKey: this.configService.get<string>('CLERK_SECRET_KEY'),
        });
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        // Check if route is marked as public
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (isPublic) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;

        if (!authHeader?.startsWith('Bearer ')) {
            throw new UnauthorizedException('Missing or invalid authorization header');
        }

        const token = authHeader.split(' ')[1];

        try {
            // Verify the JWT token with Clerk
            const payload = await this.clerk.verifyToken(token);

            // Attach user info to request
            request.user = {
                userId: payload.sub,
            } as AuthenticatedUser;

            return true;
        } catch (error) {
            throw new UnauthorizedException('Invalid or expired token');
        }
    }
}
