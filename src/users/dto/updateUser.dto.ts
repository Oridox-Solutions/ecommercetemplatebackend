import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './createUser.dto';
import { IsString, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateUserDto extends PartialType(OmitType(CreateUserDto, ['password'] as const)) {
  @Transform(({ value }: { value: unknown }) => (typeof value === 'string' ? value.trim() : value))
  @IsOptional()
  @IsString({ message: 'Address must be a string' })
  address?: string;
}
