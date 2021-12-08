import * as mongoose from 'mongoose';

export const SkillSchema = new mongoose.Schema({
  name: { type: String },
});

export interface Skill extends mongoose.Document  {
  id: string;
  name: string;
}