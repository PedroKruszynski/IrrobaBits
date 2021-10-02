import { IsString } from 'class-validator';

export class CreateStreamerDto {
  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;
}
