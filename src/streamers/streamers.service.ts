import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CreateStreamerDto } from './dto/create-streamer.dto';
import { UpdateStreamerDto } from './dto/update-streamer.dto';
import { Streamer } from './entities/streamer.entity';

@Injectable()
export class StreamersService {
  constructor(
    @InjectModel(Streamer.name) private readonly streamerModel: Model<Streamer>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.streamerModel.find().skip(offset).limit(limit).exec();
  }

  async findOne(id: string) {
    const streamer = await this.streamerModel.findById({ _id: id }).exec();
    if (!streamer) {
      throw new NotFoundException(`Streamer #${id} not found`);
    }
    return streamer;
  }

  create(createStreamerDto: CreateStreamerDto) {
    const streamer = new this.streamerModel(createStreamerDto);
    return streamer.save();
  }

  async update(id: string, updateStreamerDto: UpdateStreamerDto) {
    const existingStreamer = await this.streamerModel
      .findOneAndUpdate({ _id: id }, { $set: updateStreamerDto }, { new: true })
      .exec();

    if (!existingStreamer) {
      throw new NotFoundException(`Streamer #${id} not found`);
    }
    return existingStreamer;
  }

  async remove(id: string) {
    const existingStreamer = await this.streamerModel.findById(id);
    if (!existingStreamer) {
      throw new NotFoundException(`Streamer #${id} not found`);
    }
    return existingStreamer.remove();
  }
}
