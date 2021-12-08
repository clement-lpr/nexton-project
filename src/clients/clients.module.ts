import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UnitSchema } from 'src/clients/schemas/business-unit';
import { ClientSchema } from './schemas/client.model';
import { ClientsController } from './controllers/clients.controller';
import { ClientsRepository } from './repositories/clients.repository';
import { BusinessUnitsController } from './controllers/business-units.controller';
import { BusinessUnitsRepository } from './repositories/business-units.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Client', schema: ClientSchema
      },
      {
        name: 'Unit', schema: UnitSchema
      }
    ])
  ],
  controllers: [ClientsController, BusinessUnitsController],
  providers: [ ClientsRepository, BusinessUnitsRepository ]
})
export class ClientsModule {}
