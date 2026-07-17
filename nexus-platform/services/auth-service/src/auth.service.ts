import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@nexus/database';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private prisma: PrismaClient;

  constructor(private jwtService: JwtService) {
    this.prisma = new PrismaClient();
  }

  async login(email: string, pass: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isMatch = await bcrypt.compare(pass, user.passwordHash);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }
    
    const payload = { email: user.email, sub: user.id, role: user.roleId };
    return {
      accessToken: this.jwtService.sign(payload),
      user: { id: user.id, email: user.email, role: user.roleId },
    };
  }

  async register(data: any) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    // Find or create role logic would go here.
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        passwordHash: hashedPassword,
        firstName: data.firstName,
        lastName: data.lastName,
        roleId: data.roleId || 'default_role_id', // Assuming roleId is passed or default
      },
    });
    return { id: user.id, email: user.email };
  }
}
