import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StreamersService } from 'src/streamers/streamers.service';
import { UsersService } from 'src/users/users.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import { Donation } from './entities/donation.entity';

@Injectable()
export class DonationsService {
    constructor(
      @InjectModel(Donation.name) private readonly donationModel: Model<Donation>,
      private readonly streamersService: StreamersService,
      private readonly usersService: UsersService,
    ) {}

    async create(createDonationDto: CreateDonationDto) {
      await this.usersService.findOne(createDonationDto.idUser);
      await this.streamersService.findOne(createDonationDto.idStreamer);
      const donation = new this.donationModel(createDonationDto);
      return donation.save();
    }
}
