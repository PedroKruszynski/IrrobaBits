import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateStreamerDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly channelName: string;

  @IsNumber()
  readonly numberBank: number;

  @IsString()
  readonly agencyBank: string;

  @IsString()
  readonly accountBank: string;
}
