import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';
import { ReviewsModule } from './reviews/reviews.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ProductsModule,
    CategoriesModule,
    CartModule,
    OrdersModule,
    ReviewsModule,
    AdminModule,
  ],
})
export class AppModule {}
