import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class ReviewsService {
  getReviewsForProduct(productId: string) {
    throw new InternalServerErrorException('Not implemented');
  }
  createReview(productId: string) {
    throw new InternalServerErrorException('Not implemented');
  }
  updateReview(reviewId: string) {
    throw new InternalServerErrorException('Not implemented');
  }
  deleteReview(reviewId: string) {
    throw new InternalServerErrorException('Not implemented');
  }
}
