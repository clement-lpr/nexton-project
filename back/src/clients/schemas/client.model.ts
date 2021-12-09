import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export const ClientSchema = new mongoose.Schema({
  name: { type: String },
  businessUnit: { type: mongoose.Schema.Types.ObjectId,
  ref: 'Unit' },
});

export class Client extends mongoose.Document  {
  @ApiProperty({ example: 1, description: 'company / client Id' })
  id: string;

  @ApiProperty({ example: 'Bouygues', description: `client / company's name` })
  name: string;

  @ApiProperty({ example: 'TELECOM', description: 'Business unit' })
  businessUnit: Object;
}
