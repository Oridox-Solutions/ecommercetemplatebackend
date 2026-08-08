import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const validLogLevels = ['log', 'error', 'warn', 'debug', 'verbose'] as const;

  const configuredLogLevel = process.env.LOG_LEVEL;

  const logLevel = validLogLevels.includes(configuredLogLevel as (typeof validLogLevels)[number])
    ? (configuredLogLevel as (typeof validLogLevels)[number])
    : 'log';

  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule, {
    logger: [logLevel],
  });

  app.enableCors({
    origin: process.env.CORS_ORIGIN?.split(',') ?? 'http://localhost:5173',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());

  if (process.env.NODE_ENV !== 'production') {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('Oridox E-Commerce API')
      .setDescription('API documentation for the Oridox E-Commerce backend.')
      .setVersion('1.0')
      .addBearerAuth(
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
  }

  const port = Number(process.env.PORT) || 3000;

  await app.listen(port);
  logger.log(`Server is running on http://localhost:${port}`);
}

void bootstrap();
