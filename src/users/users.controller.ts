import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';
import { Prisma, PrismaClient } from '@prisma/client';
import { ApiOperation } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() userCreateDto: Prisma.UserCreateInput) {
    return await this.usersService.createUser(userCreateDto);
  }

  @Get()
  findAll(@Req() request: Request) {
    return this.usersService.findUserAll();
  }
}
