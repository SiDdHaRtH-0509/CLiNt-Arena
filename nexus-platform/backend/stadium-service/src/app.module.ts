import { Module } from '@nestjs/common';
import { StadiumController } from './stadium.controller';
import { StadiumService } from './stadium.service';

@Module({
  imports: [],
  controllers: [StadiumController],
  providers: [StadiumService],
})
export class AppModule {}
