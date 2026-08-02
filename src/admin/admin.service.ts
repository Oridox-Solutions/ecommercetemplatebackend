import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class AdminService {
  getDashboard() {
    throw new InternalServerErrorException('Not implemented');
  }
  manageUsers() {
    throw new InternalServerErrorException('Not implemented');
  }
  manageOrders() {
    throw new InternalServerErrorException('Not implemented');
  }
}
