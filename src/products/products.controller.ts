import { Controller, Get, Post, Put, Delete, Param, UseGuards, ParseIntPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ProductsService } from './products.service';

@Controller('product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  listProducts() {
    return this.productsService.listProducts();
  }

  @Get(':id')
  getProduct(@Param('id', ParseIntPipe) productId: number) {
    return this.productsService.getProduct(productId);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createProduct() {
    return this.productsService.createProduct();
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  updateProduct(@Param('id', ParseIntPipe) productId: number) {
    return this.productsService.updateProduct(productId);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deleteProduct(@Param('id', ParseIntPipe) productId: number) {
    return this.productsService.deleteProduct(productId);
  }
}
