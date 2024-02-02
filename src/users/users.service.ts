import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(
    data: Prisma.UserCreateInput,
  ): Promise<{ email: string; name: string }> {
    const { name, email, password } = data;
    const saltRounds = 10;
    const encryptedPassword = bcrypt.hashSync(password, saltRounds);

    return await this.prisma.user.create({
      data: {
        email,
        password: encryptedPassword,
        name,
      },
      select: {
        email: true,
        name: true,
      },
    });
  }

  async findUserAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findUserByEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
