import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './createUser.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateUserDto extends PartialType(OmitType(CreateUserDto, ['password'] as const)) {
  @IsOptional()
  @IsString()
  address?: string;
}
