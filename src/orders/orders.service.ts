import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class OrdersService {
  listOrders() {
    throw new InternalServerErrorException('Not implemented');
  }
  getOrder(orderId: number) {
    throw new InternalServerErrorException('Not implemented');
  }
  createOrder() {
    throw new InternalServerErrorException('Not implemented');
  }
  updateOrderStatus(orderId: number) {
    throw new InternalServerErrorException('Not implemented');
  }
}
