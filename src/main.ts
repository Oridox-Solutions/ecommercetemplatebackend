import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; 
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Oridox E-Commerce API')
    .setDescription('API documentation for the Oridox E-Commerce backend.')
    .setVersion('1.0')
    .addBearerAuth (
      {
        type: 'http', 
        scheme: 'bearer', 
        bearerFormat: 'JWT', 
        description: 'Enter JWT access token', 
      }, 
      'JWT-auth', 
    )
    .build(); 

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig); 

  SwaggerModule.setup('api/docs', app, swaggerDocument); 

  const port = process.env.PORT ?? 3000;

  await app.listen(process.env.PORT ?? 3000);
  Logger.log(`Server is running on http://localhost:${process.env.PORT ?? 3000}`);
}
void bootstrap();
