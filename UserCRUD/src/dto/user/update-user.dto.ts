import { IsArray, IsNumber, IsString,IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsArray()
  @IsOptional()
  hobbyIds: number[];
}
