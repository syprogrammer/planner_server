import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './common/decorators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // Health check endpoint - public for monitoring
  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Health check endpoint for deployment platforms
  @Public()
  @Get('health')
  getHealth() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
}
