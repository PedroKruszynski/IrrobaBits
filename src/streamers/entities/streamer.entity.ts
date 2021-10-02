import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Streamer extends Document {
  @Prop({ index: true, required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const StreamerSchema = SchemaFactory.createForClass(Streamer);
