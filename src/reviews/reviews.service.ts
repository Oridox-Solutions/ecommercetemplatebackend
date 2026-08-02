import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class ReviewsService {
  getReviewsForProduct(productId: number) {
    throw new InternalServerErrorException(
      `getReviewsForProduct not implemented for product ${productId}`,
    );
  }
  createReview(productId: number) {
    throw new InternalServerErrorException(`createReview not implemented for product ${productId}`);
  }
  updateReview(reviewId: number) {
    throw new InternalServerErrorException(`updateReview not implemented for review ${reviewId}`);
  }
  deleteReview(reviewId: number) {
    throw new InternalServerErrorException(`deleteReview not implemented for review ${reviewId}`);
  }
}
