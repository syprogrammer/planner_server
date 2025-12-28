import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { verifyToken } from '@clerk/backend';
import { ConfigService } from '@nestjs/config';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

export interface AuthenticatedUser {
    userId: string;
}

@Injectable()
export class ClerkAuthGuard implements CanActivate {
    private readonly logger = new Logger(ClerkAuthGuard.name);
    private readonly secretKey: string;

    constructor(
        private configService: ConfigService,
        private reflector: Reflector,
    ) {
        this.secretKey = this.configService.get<string>('CLERK_SECRET_KEY') || '';
        this.logger.log(`Clerk secret key configured: ${this.secretKey ? 'Yes (length: ' + this.secretKey.length + ')' : 'No'}`);
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
            this.logger.warn('Missing or invalid authorization header');
            throw new UnauthorizedException('Missing or invalid authorization header');
        }

        const token = authHeader.split(' ')[1];
        this.logger.debug(`Token received (first 20 chars): ${token.substring(0, 20)}...`);

        try {
            // Verify the JWT token with Clerk - use the direct verifyToken function
            const payload = await verifyToken(token, {
                secretKey: this.secretKey,
            });
            this.logger.debug(`Token verified successfully for user: ${payload.sub}`);

            // Attach user info to request
            request.user = {
                userId: payload.sub,
            } as AuthenticatedUser;

            return true;
        } catch (error) {
            this.logger.error(`Token verification failed: ${error.message}`);
            throw new UnauthorizedException('Invalid or expired token');
        }
    }
}
