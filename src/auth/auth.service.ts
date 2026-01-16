import { Injectable, UnauthorizedException, ConflictException, Logger, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from './email.service';
import { RegisterDto, LoginDto, ForgotPasswordDto, ResetPasswordDto } from './dto';

export interface TokenPayload {
    sub: string;
    email: string;
    name: string;
}

export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
}

export interface AuthenticatedUser {
    userId: string;
    email: string;
    userName: string;
}

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);
    private readonly jwtSecret: string;
    private readonly jwtRefreshSecret: string;
    private readonly accessTokenTtl: number;
    private readonly refreshTokenTtl: number;

    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
        private configService: ConfigService,
        private emailService: EmailService,
    ) {
        this.jwtSecret = this.configService.get<string>('JWT_SECRET') || 'default-secret-change-me';
        this.jwtRefreshSecret = this.configService.get<string>('JWT_REFRESH_SECRET') || 'default-refresh-secret-change-me';
        this.accessTokenTtl = this.configService.get<number>('JWT_ACCESS_TTL') || 900; // 15 minutes in seconds
        this.refreshTokenTtl = this.configService.get<number>('JWT_REFRESH_TTL') || 604800; // 7 days in seconds
    }

    async register(dto: RegisterDto) {
        // Check if user exists
        const existingUser = await this.prisma.user.findUnique({
            where: { email: dto.email.toLowerCase() },
        });

        if (existingUser) {
            throw new ConflictException('User with this email already exists');
        }

        // Hash password
        const passwordHash = await bcrypt.hash(dto.password, 12);

        // Generate verification token
        const verifyToken = crypto.randomBytes(32).toString('hex');

        // Create user
        const user = await this.prisma.user.create({
            data: {
                email: dto.email.toLowerCase(),
                passwordHash,
                name: dto.name,
                verifyToken,
                emailVerified: false,
            },
        });

        // Send verification email
        await this.emailService.sendVerificationEmail(user.email, verifyToken, user.name || undefined);

        this.logger.log(`User registered: ${user.email}`);

        return {
            message: 'Registration successful. Please check your email to verify your account.',
            userId: user.id,
        };
    }

    async login(dto: LoginDto) {


        const user = await this.prisma.user.findUnique({
            where: { email: dto.email.toLowerCase() },
        });

        if (!user) {
            this.logger.warn(`Login failed: User not found for email ${dto.email}`);
            throw new UnauthorizedException('Invalid credentials');
        }

        const passwordValid = await bcrypt.compare(dto.password, user.passwordHash);
        if (!passwordValid) {
            this.logger.warn(`Login failed: Invalid password for email ${dto.email}`);
            throw new UnauthorizedException('Invalid credentials');
        }





        // Generate tokens
        const tokens = await this.generateTokens(user.id, user.email, user.name || '');

        // Store hashed refresh token
        const refreshTokenHash = await bcrypt.hash(tokens.refreshToken, 10);
        await this.prisma.user.update({
            where: { id: user.id },
            data: { refreshToken: refreshTokenHash },
        });

        this.logger.log(`User logged in: ${user.email}`);

        // Send welcome email (async, don't block login)
        this.emailService.sendWelcomeEmail(
            user.email,
            user.name || undefined,
            user.emailVerified,
            user.verifyToken || undefined
        ).catch(err => this.logger.error(`Failed to send welcome email: ${err.message}`));

        return {
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                avatarUrl: user.avatarUrl,
            },
            ...tokens,
        };
    }

    async verifyEmail(token: string) {
        const user = await this.prisma.user.findFirst({
            where: { verifyToken: token },
        });

        if (!user) {
            throw new BadRequestException('Invalid or expired verification token');
        }

        await this.prisma.user.update({
            where: { id: user.id },
            data: {
                emailVerified: true,
                verifyToken: null,
            },
        });

        this.logger.log(`Email verified for: ${user.email}`);

        return { message: 'Email verified successfully. You can now log in.' };
    }

    async refreshTokens(refreshToken: string) {
        try {
            // Verify the refresh token
            const payload = this.jwtService.verify<TokenPayload>(refreshToken, {
                secret: this.jwtRefreshSecret,
            });

            const user = await this.prisma.user.findUnique({
                where: { id: payload.sub },
            });

            if (!user || !user.refreshToken) {
                throw new UnauthorizedException('Invalid refresh token');
            }

            // Verify stored refresh token matches
            const tokenValid = await bcrypt.compare(refreshToken, user.refreshToken);
            if (!tokenValid) {
                throw new UnauthorizedException('Invalid refresh token');
            }

            // Generate new tokens (token rotation)
            const tokens = await this.generateTokens(user.id, user.email, user.name || '');

            // Update stored refresh token
            const newRefreshTokenHash = await bcrypt.hash(tokens.refreshToken, 10);
            await this.prisma.user.update({
                where: { id: user.id },
                data: { refreshToken: newRefreshTokenHash },
            });

            return tokens;
        } catch (error) {
            this.logger.error(`Refresh token error: ${error.message}`);
            throw new UnauthorizedException('Invalid refresh token');
        }
    }

    async logout(userId: string) {
        await this.prisma.user.update({
            where: { id: userId },
            data: { refreshToken: null },
        });

        return { message: 'Logged out successfully' };
    }

    async getMe(userId: string) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                name: true,
                avatarUrl: true,
                emailVerified: true,
                createdAt: true,
            },
        });

        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        return user;
    }

    async validateUser(payload: TokenPayload): Promise<AuthenticatedUser> {
        const user = await this.prisma.user.findUnique({
            where: { id: payload.sub },
        });

        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        return {
            userId: user.id,
            email: user.email,
            userName: user.name || user.email,
        };
    }

    private async generateTokens(userId: string, email: string, name: string): Promise<AuthTokens> {
        const payload: TokenPayload = { sub: userId, email, name };

        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: this.jwtSecret,
                expiresIn: this.accessTokenTtl,
            }),
            this.jwtService.signAsync(payload, {
                secret: this.jwtRefreshSecret,
                expiresIn: this.refreshTokenTtl,
            }),
        ]);

        return { accessToken, refreshToken };
    }
    async forgotPassword(dto: ForgotPasswordDto) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email.toLowerCase() },
        });

        if (!user) {
            // Don't reveal if user exists
            return { message: 'If an account with that email exists, we sent you a password reset link.' };
        }

        // Generate reset token
        const resetToken = crypto.randomBytes(32).toString('hex');
        const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour

        await this.prisma.user.update({
            where: { id: user.id },
            data: {
                resetToken,
                resetTokenExpiry,
            },
        });

        // Send email
        await this.emailService.sendPasswordResetEmail(user.email, resetToken, user.name || undefined);

        return { message: 'If an account with that email exists, we sent you a password reset link.' };
    }

    async resetPassword(dto: ResetPasswordDto) {
        const user = await this.prisma.user.findFirst({
            where: {
                resetToken: dto.token,
                resetTokenExpiry: { gt: new Date() },
            },
        });

        if (!user) {
            throw new BadRequestException('Invalid or expired password reset token');
        }

        const passwordHash = await bcrypt.hash(dto.password, 12);

        await this.prisma.user.update({
            where: { id: user.id },
            data: {
                passwordHash,
                resetToken: null,
                resetTokenExpiry: null,
                // Also invalidate all sessions
                refreshToken: null,
            },
        });

        this.logger.log(`Password reset for user: ${user.email}`);

        return { message: 'Password has been reset successfully. You can now log in with your new password.' };
    }

    async resendVerificationEmail(userId: string) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        if (user.emailVerified) {
            return { message: 'Email is already verified.' };
        }

        // Generate new verification token
        const verifyToken = crypto.randomBytes(32).toString('hex');

        await this.prisma.user.update({
            where: { id: user.id },
            data: { verifyToken },
        });

        // Send verification email
        await this.emailService.sendVerificationEmail(user.email, verifyToken, user.name || undefined);

        this.logger.log(`Verification email resent to: ${user.email}`);

        return { message: 'Verification email has been sent. Please check your inbox.' };
    }

    async updateProfile(userId: string, data: { name?: string; avatarUrl?: string }) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        const updatedUser = await this.prisma.user.update({
            where: { id: userId },
            data: {
                ...(data.name !== undefined && { name: data.name }),
                ...(data.avatarUrl !== undefined && { avatarUrl: data.avatarUrl }),
            },
            select: {
                id: true,
                email: true,
                name: true,
                avatarUrl: true,
                emailVerified: true,
                createdAt: true,
            },
        });

        this.logger.log(`Profile updated for user: ${user.email}`);

        return updatedUser;
    }
}
