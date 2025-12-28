import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Security headers
  app.use(helmet());

  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,          // Strip properties not in DTO
    forbidNonWhitelisted: true, // Throw error if unknown properties sent
    transform: true,          // Transform payloads to DTO instances
    transformOptions: {
      enableImplicitConversion: true,
    },
  }));

  // Enable CORS for frontend
  const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
    'https://planner.syprogrammer.space',
    ...(process.env.CORS_ORIGINS?.split(',') || []),
  ];

  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
  });

  // Global prefix for all API routes
  app.setGlobalPrefix('api');

  const port = process.env.PORT ?? 3001;
  await app.listen(port);
  console.log(`🚀 Backend running on http://localhost:${port}`);
}
bootstrap();
