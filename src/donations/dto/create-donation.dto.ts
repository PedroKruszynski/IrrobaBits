import { IsIn, IsMongoId, IsNotEmptyObject, IsString, ValidateIf } from 'class-validator';
import { CreditCardDto } from "./credit-card.dto";
import { PixDto } from './pix.dto';

export class CreateDonationDto {
  @IsMongoId()
  readonly idStreamer: string;

  @IsMongoId()
  readonly idUser: string;

  @IsString()
  readonly total: string;

  @IsString()
  @IsIn(['CreditCard', 'Pix'])
  readonly type: string;

  @ValidateIf(o => o.type === 'CreditCard')
  @IsNotEmptyObject()
  readonly creditCard: CreditCardDto;

  @ValidateIf(o => o.type === 'Pix')
  @IsNotEmptyObject()
  readonly pix: PixDto;
}
