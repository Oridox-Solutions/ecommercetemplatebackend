import { Controller, Get, Post, Put, Param, UseGuards, ParseIntPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { OrdersService } from './orders.service';

@Controller('order')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  listOrders() {
    return this.ordersService.listOrders();
  }

  @Post()
  createOrder() {
    return this.ordersService.createOrder();
  }

  @Get(':id')
  getOrder(@Param('id', ParseIntPipe) orderId: number) {
    return this.ordersService.getOrder(orderId);
  }

  @Put(':id')
  updateOrderStatus(@Param('id', ParseIntPipe) orderId: number) {
    return this.ordersService.updateOrderStatus(orderId);
  }
}
