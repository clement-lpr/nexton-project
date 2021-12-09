import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Unit } from '../schemas/business-unit';

@Injectable()
export class BusinessUnitsRepository {
  constructor(
    @InjectModel('Unit') private buModel: Model<Unit>) {}

    async getAllBusinessUnits(): Promise<Unit[]> {
      const result =  await this.buModel.find();
      return result;
    }
}
