import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill } from '../skill';

@Injectable()
export class SkillsRepository {
  constructor(
    @InjectModel('Skill') private skillModel: Model<Skill>) {}

    async findAllSkills(): Promise<Skill[]> {
        return this.skillModel.find().exec();
      }
}
