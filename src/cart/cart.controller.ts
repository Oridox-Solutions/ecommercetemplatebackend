import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CartService } from './cart.service';

@Controller('cart')
@UseGuards(JwtAuthGuard)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  getCart() {
    return this.cartService.getCart();
  }

  @Post()
  addToCart() {
    return this.cartService.addToCart();
  }

  @Put(':item_id')
  updateCartItem(@Param('item_id', ParseIntPipe) itemId: number) {
    return this.cartService.updateCartItem(itemId);
  }

  @Delete(':item_id')
  removeFromCart(@Param('item_id', ParseIntPipe) itemId: number) {
    return this.cartService.removeFromCart(itemId);
  }
}
