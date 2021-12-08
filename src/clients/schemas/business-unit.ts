import * as mongoose from 'mongoose';

export const UnitSchema = new mongoose.Schema({
  name: { type: String },
});

export interface Unit extends mongoose.Document  {
  id: string;
  name: string;
}