import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { extractBearerToken } from '../utils/extract-token.util';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  private readonly logger = new Logger(JwtAuthGuard.name);

  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<Request>();
    const token = extractBearerToken(req);

    if (!token) throw new UnauthorizedException('Authentication required');

    try {
      req.user = await this.jwtService.verifyAsync<JwtPayload>(token);
      return true;
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      this.logger.debug(`JWT verification failed: ${message}`);
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
