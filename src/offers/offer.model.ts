import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export const OfferSchema = new mongoose.Schema({
  abilities: { type: Array },
  businessEngineer: { type: String },
  businessUnit: { type: String },
  company: { type: String },
  description: { type: String },
  experience: { type: String },
  jobName: { type: String },
  location: { type: String },
  priority: { type: String },
},
{
  timestamps: true
});

export class Offer extends mongoose.Document  {
  id: string;

  @ApiProperty()
  abilities: Array<string>;

  @ApiProperty()
  businessEngineer: string;

  @ApiProperty()
  businessUnit: string;

  @ApiProperty()
  company: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  experience: string;

  @ApiProperty()
  jobName: string;

  @ApiProperty()
  jobType: string;

  @ApiProperty()
  // @ApiProperty({ enum: ['IDF', 'Bordeaux', 'Lille']})
  location: string;

  @ApiProperty()
  // @ApiProperty({ enum: ['Low', 'High', 'Highest']})
  priority: string

}
