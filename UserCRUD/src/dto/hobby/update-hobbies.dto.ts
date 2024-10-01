import { IsOptional, IsString } from 'class-validator';

export class UpdateHobbyDto {
  @IsOptional()
  @IsString()
  name: string;
}