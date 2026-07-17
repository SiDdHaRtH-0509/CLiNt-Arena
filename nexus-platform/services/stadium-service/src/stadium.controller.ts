import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { StadiumService } from './stadium.service';

@Controller('stadiums')
export class StadiumController {
  constructor(private readonly stadiumService: StadiumService) {}

  @Get()
  async getAllStadiums() {
    return this.stadiumService.findAll();
  }

  @Get(':id')
  async getStadiumById(@Param('id') id: string) {
    return this.stadiumService.findById(id);
  }

  @Post()
  async createStadium(@Body() data: any) {
    return this.stadiumService.create(data);
  }

  @Get(':id/matches')
  async getMatchesForStadium(@Param('id') id: string) {
    return this.stadiumService.findMatchesByStadiumId(id);
  }
}
