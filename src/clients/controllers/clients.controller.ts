/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Get, Param } from '@nestjs/common';
import { Client } from '../schemas/client.model';
import { ClientsRepository } from '../repositories/clients.repository';
import { ApiParam } from '@nestjs/swagger';

@Controller('clients')
export class ClientsController {

  constructor(private clientsRepository: ClientsRepository) {
  }
  
  @Get()
  async findAll(): Promise<Client[]> {
     const result = await this.clientsRepository.getAllClients()
    return result
    }

  @Get(':buId')
  @ApiParam({ name: 'Business unit Id', required: true})
  async findAllClients(@Param('buId') buId) {
        return await this.clientsRepository.getClientsByBu(buId);
  }

}
