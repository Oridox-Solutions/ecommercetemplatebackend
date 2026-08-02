import { Controller, Get, Post, Put, Param, UseGuards, ParseIntPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { OrdersService } from './orders.service';

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  listOrders() {
    return this.ordersService.listOrders();
  }

  @Get(':order_id')
  getOrder(@Param('order_id', ParseIntPipe) orderId: number) {
    return this.ordersService.getOrder(orderId);
  }

  @Post()
  createOrder() {
    return this.ordersService.createOrder();
  }

  @Put(':order_id')
  updateOrderStatus(@Param('order_id', ParseIntPipe) orderId: number) {
    return this.ordersService.updateOrderStatus(orderId);
  }
}
