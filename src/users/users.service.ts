import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  createUser(createUserDto: CreateUserDto) {
    throw new InternalServerErrorException('Not implemented');
  }

  getUser(userId: number) {
    throw new InternalServerErrorException('Not implemented');
  }

  updateUser(userId: number, updateUserDto: UpdateUserDto) {
    throw new InternalServerErrorException('Not implemented');
  }

  deleteUser(userId: number) {
    throw new InternalServerErrorException('Not implemented');
  }
}