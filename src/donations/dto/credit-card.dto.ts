// Código de Segurança

import { IsString, IsDate } from 'class-validator';

export class CreditCardDto {
  @IsString()
  readonly numberCard: string;

  @IsDate()
  readonly validThru: Date;

  @IsString()
  readonly cardVerificationCode: string;
}
