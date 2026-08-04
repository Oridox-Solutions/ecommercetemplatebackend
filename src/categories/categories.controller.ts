import { Controller, Get, Post, Put, Delete, Param, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CategoriesService } from './categories.service';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @ApiOperation({
    summary: 'Retrieve all categories.',
    description: 'Returns a list of all available product categories.',
  })
  @ApiResponse({
    status: 200,
    description: 'Categories retrived successfully.',
  })
  listCategories() {
    return this.categoriesService.listCategories();
  }

  @Get(':category_id')
  @ApiOperation({
    summary: 'Retrieve a category by ID.',
    description: 'Returns a single category using its unique ID.',
  })
  @ApiParam({
    name: 'category_id',
    description: 'Unique indentifier of the category.',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Category retrieved successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'Category not found.',
  })
  getCategory(@Param('category_id', ParseIntPipe) categoryId: number) {
    return this.categoriesService.getCategory(categoryId);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Create a new category',
    description: 'Creates a new product category. Authentication is required.',
  })
  @ApiResponse({
    status: 201,
    description: 'Category created successfully.',
  })
  createCategory() {
    return this.categoriesService.createCategory();
  }

  @Put(':category_id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Update an existing category',
    description: 'Updates an existing category using its unique ID',
  })
  @ApiParam({
    name: 'category_id',
    description: 'Unique identifier of the category.',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Category updated successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required',
  })
  @ApiResponse({
    status: 404,
    description: 'Category not found.',
  })
  updateCategory(@Param('category_id', ParseIntPipe) categoryId: number) {
    return this.categoriesService.updateCategory(categoryId);
  }

  @Delete(':category_id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Delete an existing category',
    description: 'Deletes an existing category using its unique ID',
  })
  @ApiParam({
    name: 'category_id',
    description: 'Unique identifier of the category.',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Category deleted successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required',
  })
  @ApiResponse({
    status: 404,
    description: 'Category not found.',
  })
  deleteCategory(@Param('category_id', ParseIntPipe) categoryId: number) {
    return this.categoriesService.deleteCategory(categoryId);
  }
}
