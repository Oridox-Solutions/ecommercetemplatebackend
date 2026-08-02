import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class ReviewsService {
  getReviewsForProduct(productId: number) {
    throw new InternalServerErrorException('Not implemented');
  }
  createReview(productId: number) {
    throw new InternalServerErrorException('Not implemented');
  }
  updateReview(reviewId: number) {
    throw new InternalServerErrorException('Not implemented');
  }
  deleteReview(reviewId: number) {
    throw new InternalServerErrorException('Not implemented');
  }
}
