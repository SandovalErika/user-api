import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHobbyDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
