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
  creationDate: { type: String }
});

export interface Offer extends mongoose.Document  {
  id: string;
  abilities: string;
  businessEngineer: string;
  businessUnit: string;
  company: string;
  creationDate: string;
  description: string;
  experience: string;
  jobName: string;
  jobType: string;
  location: string;
  priority: string
}
