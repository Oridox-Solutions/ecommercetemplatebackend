import { Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ProductsService } from './products.service';

@ApiTags('Products')
@Controller('product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({
    summary: 'Retrieve all products',
    description: 'Returns a list of all available products.',
  })
  @ApiResponse({
    status: 200,
    description: 'Products retrieved successfully.',
  })
  listProducts() {
    return this.productsService.listProducts();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve a product by ID',
    description: 'Returns a single product using its unique ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'Unique identifier of the product.',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Product retrieved successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found.',
  })
  getProduct(@Param('id', ParseIntPipe) productId: number) {
    return this.productsService.getProduct(productId);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Create a new product',
    description: 'Creates a new product. Authentication is required.',
  })
  @ApiResponse({
    status: 201,
    description: 'Product created successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required.',
  })
  createProduct() {
    return this.productsService.createProduct();
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Update an existing product',
    description: 'Updates an existing product using its ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'Unique identifier of the product.',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Product updated successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required.',
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found.',
  })
  updateProduct(@Param('id', ParseIntPipe) productId: number) {
    return this.productsService.updateProduct(productId);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Delete a product',
    description: 'Deletes an existing product using its ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'Unique identifier of the product.',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Product deleted successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required.',
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found.',
  })
  deleteProduct(@Param('id', ParseIntPipe) productId: number) {
    return this.productsService.deleteProduct(productId);
  }
}
