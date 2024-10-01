import { IsArray, IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsArray()
  @IsOptional()
  hobbyIds?: number[];
}
