import { PartialType } from '@nestjs/mapped-types';

import { CreateStreamerDto } from 'src/streamers/dto/create-streamer.dto';

export class UpdateStreamerDto extends PartialType(CreateStreamerDto) {}
