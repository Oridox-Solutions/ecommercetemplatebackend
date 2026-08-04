import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { AdminService } from './admin.service';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Admin')
@ApiBearerAuth('JWT-auth')
@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('dashboard')
  @ApiOperation({
    summary: 'Retrieve the admin dashboard.',
    description: 'Returns dashboard information for an authenticated administration.',
  })
  @ApiResponse({
    status: 200,
    description: 'Admin dashboard retrieved successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required.',
  })
  @ApiResponse({
    status: 403,
    description: 'Administrator access required.',
  })
  getDashboard() {
    return this.adminService.getDashboard();
  }

  @Get('users')
  @ApiOperation({
    summary: 'Retrieve users for administration.',
    description: 'Returns user-management information for an authenticated administration.',
  })
  @ApiResponse({
    status: 200,
    description: 'Admin user infromation retrieved successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required.',
  })
  @ApiResponse({
    status: 403,
    description: 'Administrator access required.',
  })
  manageUsers() {
    return this.adminService.manageUsers();
  }

  @Get('orders')
  @ApiOperation({
    summary: 'Retrieve users for administration.',
    description: 'Returns user-management information for an authenticated administration.',
  })
  @ApiResponse({
    status: 200,
    description: 'Admin order infromation retrieved successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required.',
  })
  @ApiResponse({
    status: 403,
    description: 'Administrator access required.',
  })
  manageOrders() {
    return this.adminService.manageOrders();
  }
}
