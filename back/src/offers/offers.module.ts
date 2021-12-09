import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OffersController } from './controllers/offers.controller';
import { OfferSchema } from './offer.model';
import { OffersRepository } from './repositories/offers.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Offer', schema: OfferSchema
      }
    ])
  ],
  controllers: [OffersController],
  providers: [ OffersRepository ]
})
export class OffersModule {}
