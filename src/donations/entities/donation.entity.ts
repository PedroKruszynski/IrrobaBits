import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { PixDto } from "../dto/pix.dto";
import { CreditCardDto } from '../dto/credit-card.dto';

@Schema()
export class Donation extends Document {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Streamer', required: true })
  readonly idStreamer: string;

  @Prop({  type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  readonly idUser: string;

  @Prop({ required: true })
  readonly total: string;

  @Prop({ required: true })
  readonly type: string;

  @Prop({ required: false, type: CreditCardDto })
  readonly creditCard: {};

  @Prop({ required: true, type: PixDto })
  readonly pix: {};
}

export const DonationSchema = SchemaFactory.createForClass(Donation);
