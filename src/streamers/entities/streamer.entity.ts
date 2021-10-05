import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Streamer extends Document {
  @Prop({ index: true, required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  channelName: string;

  @Prop({ required: true })
  numberBank: number;

  @Prop({ required: true })
  agencyBank: string;

  @Prop({ required: true })
  accountBank: string;
}

export const StreamerSchema = SchemaFactory.createForClass(Streamer);
