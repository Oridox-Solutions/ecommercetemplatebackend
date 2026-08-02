import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  listCategories() {
    throw new InternalServerErrorException('Not implemented');
  }
  getCategory(categoryId: number) {
    throw new InternalServerErrorException('Not implemented');
  }
  createCategory() {
    throw new InternalServerErrorException('Not implemented');
  }
  updateCategory(categoryId: number) {
    throw new InternalServerErrorException('Not implemented');
  }
  deleteCategory(categoryId: number) {
    throw new InternalServerErrorException('Not implemented');
  }
}
