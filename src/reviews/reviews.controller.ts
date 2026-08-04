import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import type { Request } from 'express';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateReviewDto } from './dto/createReview.dto';
import { UpdateReviewDto } from './dto/updateReview.dto';
import { ReviewsService } from './reviews.service';

@ApiTags('Reviews')
@Controller()
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get('product/:product_id/reviews')
  @ApiOperation({
    summary: 'Retrieve reviews for a product',
    description: 'Returns all reviews associated with a specific product.',
  })
  @ApiParam({
    name: 'product_id',
    description: 'Unique identifier of the product.',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Product reviews retrieved successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found.',
  })
  getReviewsForProduct(@Param('product_id', ParseIntPipe) productId: number) {
    return this.reviewsService.getReviewsForProduct(productId);
  }

  @Post('product/:product_id/reviews')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Create a product review',
    description: 'Creates a review for a specific product. Authentication is required.',
  })
  @ApiParam({
    name: 'product_id',
    description: 'Unique identifier of the product.',
    example: 1,
  })
  @ApiResponse({
    status: 201,
    description: 'Review created successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required.',
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found.',
  })
  createReview(
    @Req() req: Request,
    @Param('product_id', ParseIntPipe) productId: number,
    @Body() createReviewDto: CreateReviewDto,
  ) {
    const userId = req.user!.sub;

    return this.reviewsService.createReview(userId, productId, createReviewDto);
  }

  @Put('review/:review_id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Update a review',
    description: 'Updates an existing review using its unique ID. Authentication is required.',
  })
  @ApiParam({
    name: 'review_id',
    description: 'Unique identifier of the review.',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Review updated successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required.',
  })
  @ApiResponse({
    status: 404,
    description: 'Review not found.',
  })
  updateReview(
    @Req() req: Request,
    @Param('review_id', ParseIntPipe) reviewId: number,
    @Body() updateReviewDto: UpdateReviewDto,
  ) {
    const userId = req.user!.sub;

    return this.reviewsService.updateReview(reviewId, userId, updateReviewDto);
  }

  @Delete('review/:review_id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Delete a review',
    description: 'Deletes an existing review using its unique ID. Authentication is required.',
  })
  @ApiParam({
    name: 'review_id',
    description: 'Unique identifier of the review.',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Review deleted successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Authentication required.',
  })
  @ApiResponse({
    status: 404,
    description: 'Review not found.',
  })
  deleteReview(@Req() req: Request, @Param('review_id', ParseIntPipe) reviewId: number) {
    const userId = req.user!.sub;

    return this.reviewsService.deleteReview(reviewId, userId);
  }
}
