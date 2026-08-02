import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class ProductsService {
  listProducts() {
    throw new InternalServerErrorException('Not implemented');
  }
  getProduct(productId: number) {
    throw new InternalServerErrorException('Not implemented');
  }
  createProduct() {
    throw new InternalServerErrorException('Not implemented');
  }
  updateProduct(productId: number) {
    throw new InternalServerErrorException('Not implemented');
  }
  deleteProduct(productId: number) {
    throw new InternalServerErrorException('Not implemented');
  }
}
