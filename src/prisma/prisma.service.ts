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

        // Create pg Pool for the adapter
        const pool = new Pool({
            connectionString,
            ssl: {
                rejectUnauthorized: false, // Required for Supabase/cloud databases
            },
            max: 10, // Maximum number of connections
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 10000,
        });

        const adapter = new PrismaPg(pool);
        super({ adapter });
        this.pool = pool;
    }

    async onModuleInit(): Promise<void> {
        this.logger.log('Initializing database connection...');

        try {
            // Test connection using the pool directly
            const client: PoolClient = await this.pool.connect();
            await client.query('SELECT 1');
            client.release();
            this.logger.log('✅ Database connected successfully');
        } catch (error) {
            this.logger.error('❌ Failed to connect to database');
            this.logger.error(error);
            throw error; // This will prevent the app from starting
        }
    }

    async onModuleDestroy(): Promise<void> {
        this.logger.log('Closing database connection...');
        await this.pool.end();
        this.logger.log('Database pool closed');
    }
}
