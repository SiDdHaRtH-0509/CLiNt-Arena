import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3002;
  await app.listen(port);
  Logger.log(`Stadium Service is running on port ${port}`, 'Bootstrap');
}
bootstrap();
