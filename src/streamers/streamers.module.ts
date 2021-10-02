import { Module } from '@nestjs/common';
import { StreamersService } from './streamers.service';
import { StreamersController } from './streamers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Streamer, StreamerSchema } from './entities/streamer.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Streamer.name,
        schema: StreamerSchema,
      },
    ]),
  ],
  providers: [StreamersService],
  controllers: [StreamersController],
})
export class StreamersModule {}
