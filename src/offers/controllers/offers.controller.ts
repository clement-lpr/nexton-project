/* eslint-disable @typescript-eslint/no-empty-function */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Offer } from '../offer.model';
import { OffersRepository } from '../repositories/offers.repository';

@Controller('offers')
export class OffersController {

  constructor(private offersRepository: OffersRepository) {

  }
  @Get()
  async findAll(): Promise<Offer[]> {
    console.log('all');
    
     const result = await this.offersRepository.findAllOffers()
    return result
    }

  @Get(':id')
  async findOne(@Param('id') id: string) {
     return await this.offersRepository.findOneOffer(id);
  }

  @Post()
  async create(@Body() offer: Offer) {
     return await this.offersRepository.addOffer(offer);
  }
}
