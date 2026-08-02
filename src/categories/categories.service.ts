import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  listCategories() {
    throw new InternalServerErrorException('listCategories not implemented');
  }
  getCategory(categoryId: number) {
    throw new InternalServerErrorException(
      `getCategory not implemented for category ${categoryId}`,
    );
  }
  createCategory() {
    throw new InternalServerErrorException('createCategory not implemented');
  }
  updateCategory(categoryId: number) {
    throw new InternalServerErrorException(
      `updateCategory not implemented for category ${categoryId}`,
    );
  }
  deleteCategory(categoryId: number) {
    throw new InternalServerErrorException(
      `deleteCategory not implemented for category ${categoryId}`,
    );
  }
}
