import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CheckIdMongoosePipe } from 'src/common/pipes/check-id-mongoose/check-id-mongoose.pipe';
import { CreateStreamerDto } from './dto/create-streamer.dto';
import { UpdateStreamerDto } from './dto/update-streamer.dto';
import { StreamersService } from './streamers.service';

@Controller('streamers')
export class StreamersController {
  constructor(private readonly streamersService: StreamersService) {}

  @Get()
  async findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.streamersService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id', CheckIdMongoosePipe) id: string) {
    return this.streamersService.findOne(id);
  }

  @Post()
  create(@Body() createStreamerDto: CreateStreamerDto) {
    return this.streamersService.create(createStreamerDto);
  }

  @Patch(':id')
  update(
    @Param('id', CheckIdMongoosePipe) id: string,
    @Body() updateStreamerDto: UpdateStreamerDto,
  ) {
    return this.streamersService.update(id, updateStreamerDto);
  }

  @Delete(':id')
  remove(@Param('id', CheckIdMongoosePipe) id: string) {
    return this.streamersService.remove(id);
  }
}
