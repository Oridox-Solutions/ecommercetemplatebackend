import { Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

ApiTags('Auth');
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({
    summary: 'Authenticate a user',
    description: 'Authenticates a user and returns a JWT access token',
  })
  @ApiResponse({
    status: 200,
    description: 'User Authenticated successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid username or password.',
  })
  login() {
    return this.authService.login();
  }

  @Post('logout')
  @ApiOperation({
    summary: 'Log out a user',
    description: 'Logs out the currently authenticated user.',
  })
  @ApiResponse({
    status: 200,
    description: 'User logged out successfully.',
  })
  logout() {
    return this.authService.logout();
  }
}
