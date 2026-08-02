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
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  listCategories() {
    return this.categoriesService.listCategories();
  }

  @Get(':category_id')
  getCategory(@Param('category_id', ParseIntPipe) categoryId: number) {
    return this.categoriesService.getCategory(categoryId);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createCategory() {
    return this.categoriesService.createCategory();
  }

  @Put(':category_id')
  @UseGuards(JwtAuthGuard)
  updateCategory(@Param('category_id', ParseIntPipe) categoryId: number) {
    return this.categoriesService.updateCategory(categoryId);
  }

  @Delete(':category_id')
  @UseGuards(JwtAuthGuard)
  deleteCategory(@Param('category_id', ParseIntPipe) categoryId: number) {
    return this.categoriesService.deleteCategory(categoryId);
  }
}
