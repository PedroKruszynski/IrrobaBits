import { Module } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { DonationsController } from './donations.controller';
import { Donation, DonationSchema } from './entities/donation.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'src/users/users.module';
import { StreamersModule } from 'src/streamers/streamers.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Donation.name,
        schema: DonationSchema,
      },
    ]),
    UsersModule,
    StreamersModule
  ],
  providers: [DonationsService],
  controllers: [DonationsController]
})
export class DonationsModule {}
