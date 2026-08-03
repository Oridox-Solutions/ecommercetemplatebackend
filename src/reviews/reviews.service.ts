import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateReviewDto } from './dto/createReview.dto';
import { UpdateReviewDto } from './dto/updateReview.dto';

@Injectable()
export class ReviewsService {
  getReviewsForProduct(productId: number) {
    throw new InternalServerErrorException(
      `getReviewsForProduct not implemented for product ${productId}`,
    );
  }

  createReview(userId: number, productId: number, createReviewDto: CreateReviewDto) {
    void userId;
    void createReviewDto;
    throw new InternalServerErrorException(`createReview not implemented for product ${productId}`);
  }

  updateReview(reviewId: number, userId: number, updateReviewDto: UpdateReviewDto) {
    void userId;
    void updateReviewDto;
    throw new InternalServerErrorException(`updateReview not implemented for review ${reviewId}`);
  }

  deleteReview(reviewId: number, userId: number) {
    void userId;
    throw new InternalServerErrorException(`deleteReview not implemented for review ${reviewId}`);
  }
}
