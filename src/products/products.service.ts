import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class ProductsService {
  listProducts() {
    throw new InternalServerErrorException('listProducts not implemented');
  }
  getProduct(productId: number) {
    throw new InternalServerErrorException(
      `getProduct not implemented for product ${productId}`,
    );
  }
  createProduct() {
    throw new InternalServerErrorException('createProduct not implemented');
  }
  updateProduct(productId: number) {
    throw new InternalServerErrorException(
      `updateProduct not implemented for product ${productId}`,
    );
  }
  deleteProduct(productId: number) {
    throw new InternalServerErrorException(
      `deleteProduct not implemented for product ${productId}`,
    );
  }
}
