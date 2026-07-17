import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@nexus/database';

@Injectable()
export class StadiumService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll() {
    return this.prisma.stadium.findMany();
  }

  async findById(id: string) {
    const stadium = await this.prisma.stadium.findUnique({ where: { id } });
    if (!stadium) {
      throw new NotFoundException(`Stadium with ID ${id} not found`);
    }
    return stadium;
  }

  async create(data: any) {
    return this.prisma.stadium.create({
      data: {
        name: data.name,
        location: data.location,
        capacity: data.capacity,
      },
    });
  }

  async findMatchesByStadiumId(stadiumId: string) {
    return this.prisma.match.findMany({
      where: { stadiumId },
      include: {
        homeTeam: true,
        awayTeam: true,
      },
    });
  }
}
