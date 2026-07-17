import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('assistant')
  async queryAssistant(@Body() body: { query: string; userId: string; role: string }) {
    return this.aiService.askAssistant(body.query, body.userId, body.role);
  }

  @Post('crowd-prediction')
  async predictCrowd(@Body() body: { stadiumId: string }) {
    return this.aiService.analyzeCrowd(body.stadiumId);
  }
}
