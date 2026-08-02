import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class CartService {
  getCart() {
    throw new InternalServerErrorException('getCart not implemented');
  }
  addToCart() {
    throw new InternalServerErrorException('addToCart not implemented');
  }
  updateCartItem(itemId: number) {
    throw new InternalServerErrorException(`updateCartItem not implemented for item ${itemId}`);
  }
  removeFromCart(itemId: number) {
    throw new InternalServerErrorException(`removeFromCart not implemented for item ${itemId}`);
  }
}
