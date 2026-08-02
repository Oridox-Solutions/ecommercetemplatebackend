import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class CartService {
  getCart() {
    throw new InternalServerErrorException('Not implemented');
  }
  addToCart() {
    throw new InternalServerErrorException('Not implemented');
  }
  updateCartItem(itemId: number) {
    throw new InternalServerErrorException('Not implemented');
  }
  removeFromCart(itemId: number) {
    throw new InternalServerErrorException('Not implemented');
  }
}