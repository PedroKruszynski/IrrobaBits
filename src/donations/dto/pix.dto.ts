import { IsString } from 'class-validator';

export class PixDto {
  @IsString()
  readonly key: string;
}
