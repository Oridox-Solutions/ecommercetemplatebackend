import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: createUserDto.email,
        password: hashedPassword,
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
      },
    });

    const { password, ...result } = user;
    void password;
    return result;
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
