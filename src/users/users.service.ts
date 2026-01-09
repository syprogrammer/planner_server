import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
    private readonly logger = new Logger(UsersService.name);

    constructor(private prisma: PrismaService) { }

    async searchUsers(query: string) {
        if (!query || query.length < 2) return [];

        try {
            // Search users in local database by name or email
            const users = await this.prisma.user.findMany({
                where: {
                    OR: [
                        { name: { contains: query, mode: 'insensitive' } },
                        { email: { contains: query, mode: 'insensitive' } },
                    ],
                    emailVerified: true, // Only return verified users
                },
                take: 10,
                select: {
                    id: true,
                    name: true,
                    email: true,
                    avatarUrl: true,
                },
            });

            return users.map(user => ({
                id: user.id,
                name: user.name || 'Unknown',
                email: user.email,
                avatarUrl: user.avatarUrl,
            }));
        } catch (error) {
            this.logger.error(`Failed to search users: ${error.message}`);
            return [];
        }
    }

    async findById(userId: string) {
        return this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
                avatarUrl: true,
            },
        });
    }

    async findByEmail(email: string) {
        return this.prisma.user.findUnique({
            where: { email: email.toLowerCase() },
            select: {
                id: true,
                name: true,
                email: true,
                avatarUrl: true,
            },
        });
    }
}
