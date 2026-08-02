import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    throw new InternalServerErrorException('login not implemented');
  }

  logout() {
    throw new InternalServerErrorException('logout not implemented');
  }
}
