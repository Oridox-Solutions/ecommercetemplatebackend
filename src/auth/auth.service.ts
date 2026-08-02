import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    throw new InternalServerErrorException('Not implemented');
  }

  logout() {
    throw new InternalServerErrorException('Not implemented');
  }
}
