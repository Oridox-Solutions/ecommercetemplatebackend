import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import type { Request } from 'express';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new user',
    description: 'Creates a new user account.',
  })
  @ApiResponse({
    status: 201,
    description: 'User created successfully.',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid user data.',
  })
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Retrieve a user by ID',
    description: 'Returns a single user using their unique ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'Unique identifier of the user.',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'User retrieved successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required.',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found.',
  })
  getUser(@Req() req: Request, @Param('id', ParseIntPipe) userId: number) {
    const requestingUserId = req.user!.sub;

    return this.usersService.getUser(userId, requestingUserId);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Update an existing user',
    description: 'Updates an existing user using their unique ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'Unique identifier of the user.',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'User updated successfully.',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid user data.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required.',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found.',
  })
  updateUser(
    @Req() req: Request,
    @Param('id', ParseIntPipe) userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const requestingUserId = req.user!.sub;

    return this.usersService.updateUser(userId, requestingUserId, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Delete a user',
    description: 'Deletes an existing user using their unique ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'Unique identifier of the user.',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'User deleted successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required.',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found.',
  })
  deleteUser(@Req() req: Request, @Param('id', ParseIntPipe) userId: number) {
    const requestingUserId = req.user!.sub;

    return this.usersService.deleteUser(userId, requestingUserId);
  }
}
