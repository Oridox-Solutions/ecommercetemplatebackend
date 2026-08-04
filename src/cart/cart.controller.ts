import { Controller, Get, Post, Put, Delete, Param, UseGuards, ParseIntPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CartService } from './cart.service';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Cart')
@Controller('cart')
@UseGuards(JwtAuthGuard)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Retrieve the current cart',
    description: "Returns the authenticated user's shopping cart.",
  })
  @ApiResponse({
    status: 200,
    description: 'Cart retrieved successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required.',
  })
  getCart() {
    return this.cartService.getCart();
  }

  @Post()
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Add item to a cart',
    description: "Adds a product to the authenticated user's shopping cart.",
  })
  @ApiResponse({
    status: 201,
    description: 'Item added to cart successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required.',
  })
  addToCart() {
    return this.cartService.addToCart();
  }

  @Put(':item_id')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Update a cart item',
    description: "Updates an existing item in the authenticated user's shopping cart.",
  })
  @ApiParam({
    name: 'item_id',
    description: 'Unique idenifier of the cart item.',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Cart item updated successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required.',
  })
  @ApiResponse({
    status: 404,
    description: 'Cart item not found.',
  })
  updateCartItem(@Param('item_id', ParseIntPipe) itemId: number) {
    return this.cartService.updateCartItem(itemId);
  }

  @Delete(':item_id')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Remove an item from the cart',
    description: "Removes an item from the authenticated user's shopping cart.",
  })
  @ApiParam({
    name: 'item_id',
    description: 'Unique identifier of the cart item.',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Cart item removed successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required.',
  })
  @ApiResponse({
    status: 404,
    description: 'Cart item not found.',
  })
  removeFromCart(@Param('item_id', ParseIntPipe) itemId: number) {
    return this.cartService.removeFromCart(itemId);
  }
}
