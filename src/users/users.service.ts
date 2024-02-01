import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserCreateDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService){}

    async createUser(user: UserCreateDto):Promise<User>{
        return this.prisma.user.create(user);
    }

    // findAll():User[]{
    //     return this.users;
    // }
}
