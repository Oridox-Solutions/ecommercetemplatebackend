import { Controller, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { OrdersService } from './orders.service';

@ApiTags('Orders')
@ApiBearerAuth('JWT-auth')
@Controller('order')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  @ApiOperation({
    summary: 'Retrieve all orders',
    description: 'Returns a list of orders for the authenticated user.',
  })
  @ApiResponse({
    status: 200,
    description: 'Orders retrieved successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required.',
  })
  listOrders() {
    return this.ordersService.listOrders();
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new order',
    description: 'Creates a new order for the authenticated user.',
  })
  @ApiResponse({
    status: 201,
    description: 'Order created successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required.',
  })
  createOrder() {
    return this.ordersService.createOrder();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve an order by ID',
    description: 'Returns a single order using its unique ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'Unique identifier of the order.',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Order retrieved successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required.',
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found.',
  })
  getOrder(@Param('id', ParseIntPipe) orderId: number) {
    return this.ordersService.getOrder(orderId);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update an order status',
    description: 'Updates the status of an existing order.',
  })
  @ApiParam({
    name: 'id',
    description: 'Unique identifier of the order.',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Order updated successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required.',
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found.',
  })
  updateOrderStatus(@Param('id', ParseIntPipe) orderId: number) {
    return this.ordersService.updateOrderStatus(orderId);
  }
}
