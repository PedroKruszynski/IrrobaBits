import { Body, Controller, Post } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { CreateDonationDto } from './dto/create-donation.dto';

@Controller('donations')
export class DonationsController {
    constructor(private readonly donationsService: DonationsService) {}

    @Post()
    create(@Body() createDonationDto: CreateDonationDto) {
        return this.donationsService.create(createDonationDto);
    }
}
