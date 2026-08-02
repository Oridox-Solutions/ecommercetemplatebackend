import {
  Controller,
  Get,
  Put,
  Delete,
  Param,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  listUsers() {
    return this.usersService.listUsers();
  }

  @Get(':user_id')
  getUser(@Param('user_id', ParseIntPipe) userId: number) {
    return this.usersService.getUser(userId);
  }

  @Put(':user_id')
  updateUser(@Param('user_id', ParseIntPipe) userId: number) {
    return this.usersService.updateUser(userId);
  }

  @Delete(':user_id')
  deleteUser(@Param('user_id', ParseIntPipe) userId: number) {
    return this.usersService.deleteUser(userId);
  }
}
