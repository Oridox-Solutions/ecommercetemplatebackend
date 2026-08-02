import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  createUser(createUserDto: CreateUserDto) {
    void createUserDto;
    throw new InternalServerErrorException('createUser not implemented');
  }

  getUser(userId: number) {
    console.log(`Fetching user with ID: ${userId}`);
    throw new InternalServerErrorException(`getUser not implemented for user ${userId}`);
  }

  updateUser(userId: number, updateUserDto: UpdateUserDto) {
    void updateUserDto;
    throw new InternalServerErrorException(`updateUser not implemented for user ${userId}`);
  }

  deleteUser(userId: number) {
    throw new InternalServerErrorException(`deleteUser not implemented for user ${userId}`);
  }
}
