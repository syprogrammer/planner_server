import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';

@Injectable()
export class EmailService {
    private readonly logger = new Logger(EmailService.name);
    private resend: Resend | null = null;
    private readonly fromEmail: string;

    constructor(private configService: ConfigService) {
        const apiKey = this.configService.get<string>('RESEND_API_KEY');
        if (apiKey) {
            this.resend = new Resend(apiKey);
        } else {
            this.logger.warn('RESEND_API_KEY not configured - emails will be logged only');
        }
        this.fromEmail = this.configService.get<string>('EMAIL_FROM') || 'noreply@example.com';
    }

    async sendVerificationEmail(email: string, token: string, name?: string): Promise<boolean> {
        const appUrl = this.configService.get<string>('APP_URL') || 'http://localhost:3000';
        const verifyUrl = `${appUrl}/verify-email?token=${token}`;

        const subject = 'Verify your email address';
        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #0052CC;">Welcome to Planner${name ? `, ${name}` : ''}!</h2>
                <p>Thank you for signing up. Please verify your email address by clicking the button below:</p>
                <div style="text-align: center; margin: 30px 0;">
                    <a href="${verifyUrl}" 
                       style="background-color: #0052CC; color: white; padding: 12px 24px; 
                              text-decoration: none; border-radius: 6px; display: inline-block;">
                        Verify Email Address
                    </a>
                </div>
                <p style="color: #666;">Or copy and paste this link in your browser:</p>
                <p style="color: #0052CC; word-break: break-all;">${verifyUrl}</p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
                <p style="color: #999; font-size: 12px;">
                    If you didn't create an account, you can safely ignore this email.
                </p>
            </div>
        `;

        if (!this.resend) {
            // Log-only mode for development
            this.logger.log(`[DEV] Email verification link for ${email}: ${verifyUrl}`);
            return true;
        }

        try {
            const result = await this.resend.emails.send({
                from: this.fromEmail,
                to: email,
                subject,
                html,
            });

            if (result.error) {
                this.logger.error(`Failed to send verification email: ${result.error.message}`);
                return false;
            }

            this.logger.log(`Verification email sent to ${email}`);
            return true;
        } catch (error) {
            this.logger.error(`Failed to send verification email: ${error.message}`);
            return false;
        }
    }

    async sendPasswordResetEmail(email: string, token: string, name?: string): Promise<boolean> {
        const appUrl = this.configService.get<string>('FRONTEND_URL') || 'http://localhost:3000';
        const resetUrl = `${appUrl}/reset-password?token=${token}`;

        const subject = 'Reset your password';
        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #0052CC;">Reset Password</h2>
                <p>Hello${name ? ` ${name}` : ''},</p>
                <p>We received a request to reset your password. Click the button below to create a new password:</p>
                <div style="text-align: center; margin: 30px 0;">
                    <a href="${resetUrl}" 
                       style="background-color: #0052CC; color: white; padding: 12px 24px; 
                              text-decoration: none; border-radius: 6px; display: inline-block;">
                        Reset Password
                    </a>
                </div>
                <p style="color: #666;">Or copy and paste this link in your browser:</p>
                <p style="color: #0052CC; word-break: break-all;">${resetUrl}</p>
                <p style="color: #999; font-size: 12px;">
                    If you didn't request a password reset, you can safely ignore this email.
                </p>
            </div>
        `;

        if (!this.resend) {
            this.logger.log(`[DEV] Password reset link for ${email}: ${resetUrl}`);
            return true;
        }

        try {
            const result = await this.resend.emails.send({
                from: this.fromEmail,
                to: email,
                subject,
                html,
            });

            if (result.error) {
                this.logger.error(`Failed to send password reset email: ${result.error.message}`);
                return false;
            }

            this.logger.log(`Password reset email sent to ${email}`);
            return true;
        } catch (error) {
            this.logger.error(`Failed to send password reset email: ${error.message}`);
            return false;
        }
    }
}
