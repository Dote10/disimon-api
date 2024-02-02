import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findUserByEmail(email);

    if (bcrypt.compare(pass, user?.password)) {
      throw new UnauthorizedException();
    }

    const { password, ...result } = user;
    // TODO: user object 대신에
    // JWT 토큰을 생성후 반환한다.
    return result;
  }
}
