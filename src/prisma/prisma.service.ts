import { Injectable, Logger, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool, PoolClient } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    private readonly logger = new Logger(PrismaService.name);
    private pool: Pool;

    constructor() {
        const connectionString = process.env.DATABASE_URL;

        if (!connectionString) {
            throw new Error('DATABASE_URL environment variable is not set');
        }

        // --- SINGLETON PATTERN START ---
        // Prevent multiple instances of the pool during HMR / Development
        const globalForPrisma = global as unknown as { prismaPool: Pool };

        const poolConfig = {
            connectionString,
            ssl: {
                rejectUnauthorized: false,
            },
            max: 10, // Maintain strict limit for Neon/Railway
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 10000,
        };

        if (process.env.NODE_ENV === 'production') {
            // In production, just create the pool (nest handles singleton scope)
            // But if we wanted to be extra safe we could use global too, though typically not needed if process doesn't restart
            // For Railway, restart means new process, so global doesn't persist anyway.
            // The issue in prod is likely just hitting the limit from scale or bad disconnects.
            // Let's stick to standard instantiation but keep limits strict.
            super({ adapter: new PrismaPg(new Pool(poolConfig)) });
            return;
        }

        // Development: Reuse existing pool
        if (!globalForPrisma.prismaPool) {
            globalForPrisma.prismaPool = new Pool(poolConfig);
        }

        const pool = globalForPrisma.prismaPool;
        const adapter = new PrismaPg(pool);
        super({ adapter });
        this.pool = pool;
    }

    async onModuleInit(): Promise<void> {
        const maxRetries = 3;
        const baseDelayMs = 1000; // 1 second

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                this.logger.log(`Attempting database connection (attempt ${attempt}/${maxRetries})...`);
                await this.$connect();
                this.logger.log('✅ Database connected successfully');
                return;
            } catch (error) {
                this.logger.error(`❌ Connection attempt ${attempt} failed: ${error.message}`);

                if (attempt === maxRetries) {
                    this.logger.error('❌ All database connection attempts failed. Database is DOWN.');
                    // Throw a NestJS-specific exception for better HTTP response
                    const { ServiceUnavailableException } = await import('@nestjs/common');
                    throw new ServiceUnavailableException('Database is currently unavailable. Please try again later.');
                }

                // Exponential backoff: 1s, 2s, 4s
                const delay = baseDelayMs * Math.pow(2, attempt - 1);
                this.logger.warn(`Retrying in ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }

    async onModuleDestroy(): Promise<void> {
        // In dev, we DO NOT close the pool, so it can be reused on next HMR
        if (process.env.NODE_ENV !== 'production') {
            return;
        }
        this.logger.log('Closing database connection...');
        await this.$disconnect(); // standardized disconnect
        this.logger.log('Database connection closed');
    }
}
