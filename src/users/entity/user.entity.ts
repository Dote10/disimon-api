import { ApiProperty } from "@nestjs/swagger"
import { Post } from "@prisma/client";

export class User {
    @ApiProperty()
    id:number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    post: Post;
}
