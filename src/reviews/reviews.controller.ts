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
import { ReviewsService } from './reviews.service';

@Controller()
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get('products/:product_id/reviews')
  getReviewsForProduct(@Param('product_id', ParseIntPipe) productId: number) {
    return this.reviewsService.getReviewsForProduct(productId);
  }

  @Post('products/:product_id/reviews')
  @UseGuards(JwtAuthGuard)
  createReview(@Param('product_id', ParseIntPipe) productId: number) {
    return this.reviewsService.createReview(productId);
  }

  @Put('reviews/:review_id')
  @UseGuards(JwtAuthGuard)
  updateReview(@Param('review_id', ParseIntPipe) reviewId: number) {
    return this.reviewsService.updateReview(reviewId);
  }

  @Delete('reviews/:review_id')
  @UseGuards(JwtAuthGuard)
  deleteReview(@Param('review_id', ParseIntPipe) reviewId: number) {
    return this.reviewsService.deleteReview(reviewId);
  }
}
