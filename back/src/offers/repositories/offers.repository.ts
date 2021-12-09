import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Offer } from '../offer.model';

@Injectable()
export class OffersRepository {
  constructor(@InjectModel('Offer') private offerModel: Model<Offer>) {}

  async findAllOffers() {
    const res = await this.offerModel.find();
    return res;
  }

  async addOffer(offer: Offer): Promise<Offer> {
    const newOffer = new this.offerModel(offer);
    return newOffer.save();
  }

  async findOneOffer(id): Promise<Offer> {
    const foundOffer = await this.offerModel.findById(id);
    return foundOffer;
  }
}
