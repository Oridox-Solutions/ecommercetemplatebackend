import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class OrdersService {
  listOrders() {
    throw new InternalServerErrorException('listOrders not implemented');
  }
  getOrder(orderId: number) {
    throw new InternalServerErrorException(`getOrder not implemented for order ${orderId}`);
  }
  createOrder() {
    throw new InternalServerErrorException('createOrder not implemented');
  }
  updateOrderStatus(orderId: number) {
    throw new InternalServerErrorException(
      `updateOrderStatus not implemented for order ${orderId}`,
    );
  }
}
