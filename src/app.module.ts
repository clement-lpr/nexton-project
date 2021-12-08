import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule } from './clients/clients.module';
import { OffersModule } from './offers/offers.module';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [
    ClientsModule,
    SkillsModule,
    OffersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nexton-db')],
})
export class AppModule {}
