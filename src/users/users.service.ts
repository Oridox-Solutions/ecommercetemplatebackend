import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class UsersService {
  listUsers() {
    throw new InternalServerErrorException('Not implemented');
  }
  getUser(userId: number) {
    throw new InternalServerErrorException('Not implemented');
  }
  updateUser(userId: number) {
    throw new InternalServerErrorException('Not implemented');
  }
  deleteUser(userId: number) {
    throw new InternalServerErrorException('Not implemented');
  }
}
