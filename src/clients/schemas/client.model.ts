import * as mongoose from 'mongoose';

export const ClientSchema = new mongoose.Schema({
  name: { type: String },
  businessUnit: { type: mongoose.Schema.Types.ObjectId,
  ref: 'Unit' },
});

export interface Client extends mongoose.Document  {
  id: string;
  name: string;
  businessUnit: Object;
}
