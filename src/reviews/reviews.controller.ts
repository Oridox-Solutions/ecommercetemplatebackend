import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Req,
  Param,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import type { Request } from 'express';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/createReview.dto';
import { UpdateReviewDto } from './dto/updateReview.dto';

@ApiTags('reviews')
@Controller()
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get('product/:product_id/reviews')
  getReviewsForProduct(@Param('product_id', ParseIntPipe) product_Id: number) {
    return this.reviewsService.getReviewsForProduct(product_Id);
  }

  @Post('product/:product_id/reviews')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  createReview(
    @Req() req: Request,
    @Param('product_id', ParseIntPipe) product_Id: number,
    @Body() createReviewDto: CreateReviewDto,
  ) {
    const user_Id = req.user!.sub;
    return this.reviewsService.createReview(user_Id, product_Id, createReviewDto);
  }

  @Put('review/:review_id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  updateReview(
    @Req() req: Request,
    @Param('review_id', ParseIntPipe) reviewId: number,
    @Body() updateReviewDto: UpdateReviewDto,
  ) {
    const user_Id = req.user!.sub;
    return this.reviewsService.updateReview(reviewId, user_Id, updateReviewDto);
  }

  @Delete('review/:review_id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  deleteReview(@Req() req: Request, @Param('review_id', ParseIntPipe) review_Id: number) {
    const user_Id = req.user!.sub;
    return this.reviewsService.deleteReview(review_Id, user_Id);
  }
}
