import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from '../schemas/client.model';

@Injectable()
export class ClientsRepository {
  constructor(
    @InjectModel('Client') private clientModel: Model<Client>) {}

    async getAllClients(): Promise<Client[]> {
      const result =  await this.clientModel.find();
      return result;
    }

    async getClientsByBu(buId: string){
      const result = await this.clientModel.find({ businessUnit: buId })
      .populate('businessUnit')
      .exec()
      return result;
    }
}
