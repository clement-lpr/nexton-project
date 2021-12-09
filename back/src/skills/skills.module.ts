import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillSchema } from './skills.schema';
import { SkillsController } from './controllers/skills.controller';
import { SkillsRepository } from './repositories/skills.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Skill', schema: SkillSchema
      }
    ])
  ],
  controllers: [SkillsController],
  providers: [ SkillsRepository ]
})
export class SkillsModule {}
