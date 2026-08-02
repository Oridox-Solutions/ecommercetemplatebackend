import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const token = this.extractToken(req);

    if (!token) throw new UnauthorizedException('Authentication required');

    try {
      req.user = await this.jwtService.verifyAsync(token);
      return true;
    } catch {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }

  private extractToken(req: any): string | null {
    const header = req.headers.authorization;
    return header?.startsWith('Bearer ') ? header.slice(7) : null;
  }
}
