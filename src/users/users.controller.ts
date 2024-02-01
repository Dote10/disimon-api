import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';
import { UserCreateDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post()
    create(@Body() userCreateDto:UserCreateDto){
        this.usersService.createUser(userCreateDto);
    }

    // @Get()
    // findAll(@Req()request: Request){
    //     return this.usersService.findAll();
    // }
}
