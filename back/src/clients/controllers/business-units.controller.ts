/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Get, Param } from '@nestjs/common';
import { BusinessUnitsRepository } from '../repositories/business-units.repository';
import { Unit } from '../schemas/business-unit';

@Controller('bu')
export class BusinessUnitsController {

  constructor(private businessUnitsRepository: BusinessUnitsRepository) {

  }
  @Get()
  async findAll(): Promise<Unit[]> {
     return this.businessUnitsRepository.getAllBusinessUnits()
  }

  // @Get()
  // async findAllSkills(@Param('id') id) {
  //   // return await this._skillsService.getOneClient(id);
  // }

  // @Post()
  // async create(@Body() input: CreateClientDto) {
  //   // return await this._skillsService.addClient(input);
  // }
}
