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
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  listProducts() {
    return this.productsService.listProducts();
  }

  @Get(':product_id')
  getProduct(@Param('product_id', ParseIntPipe) productId: number) {
    return this.productsService.getProduct(productId);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createProduct() {
    return this.productsService.createProduct();
  }

  @Put(':product_id')
  @UseGuards(JwtAuthGuard)
  updateProduct(@Param('product_id', ParseIntPipe) productId: number) {
    return this.productsService.updateProduct(productId);
  }

  @Delete(':product_id')
  @UseGuards(JwtAuthGuard)
  deleteProduct(@Param('product_id', ParseIntPipe) productId: number) {
    return this.productsService.deleteProduct(productId);
  }
}
