/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Get, Param } from '@nestjs/common';
import { Skill } from '../skill';
import { SkillsRepository } from '../repositories/skills.repository';

@Controller('skills')
export class SkillsController {

  constructor(private skillsRepository: SkillsRepository) {

  }
  @Get()
  async findAll(): Promise<Skill[]> {
     return this.skillsRepository.findAllSkills()
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
