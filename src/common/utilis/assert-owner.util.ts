import { ForbiddenException } from '@nestjs/common';

export function assertOwnerOrAdmin(
  requestingUserId: number,
  userId: number,
  role: string,
  message = 'You do not have permission to perform this action',
) {
  if (requestingUserId !== userId && role !== 'admin') {
    throw new ForbiddenException(message);
  }
}
