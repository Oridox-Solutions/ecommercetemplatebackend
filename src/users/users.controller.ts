import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Param,
  UseGuards,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UpdateUserDto } from './dto/updateUser.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/users')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get(':user_id')
  getUser(@Param('user_id', ParseIntPipe) userId: number) {
    return this.usersService.getUser(userId);
  }

  @Put(':user_id')
  updateUser(
    @Param('user_id', ParseIntPipe) userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUser(userId, updateUserDto);
  }

  @Delete(':user_id')
  deleteUser(@Param('user_id', ParseIntPipe) userId: number) {
    return this.usersService.deleteUser(userId);
  }
}
