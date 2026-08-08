import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger('ExceptionFilter');

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = this.extractMessage(exception);

    const errorMessage = exception instanceof Error ? exception.message : String(exception);
    const stack = status >= 500 && exception instanceof Error ? exception.stack : undefined;

    this.logger.error(
      JSON.stringify({
        method: req.method,
        path: req.originalUrl,
        statusCode: status,
        message: errorMessage,
        timestamp: new Date().toISOString(),
      }),
      stack,
    );

    const now = new Date();

    res.status(status).json({
      statusCode: status,
      date: now.toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      time: now.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }),
      path: req.originalUrl,
      message,
    });
  }

  private extractMessage(exception: unknown): string | string[] {
    if (exception instanceof HttpException) {
      const response = exception.getResponse();

      if (typeof response === 'string') {
        return response;
      }

      if (typeof response === 'object' && response !== null && 'message' in response) {
        return (response as { message: string | string[] }).message;
      }

      return JSON.stringify(response);
    }

    return 'Internal server error';
  }
}
