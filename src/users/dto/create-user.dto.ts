import { OmitType } from "@nestjs/swagger";
import { User } from "../entity/user.entity";


export class UserCreateDto extends OmitType(User,['post']){}
