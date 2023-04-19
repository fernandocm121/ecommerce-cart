import * as mongoose from 'mongoose';

export const ProductsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  quantity: Number,
  src: { type: [String], required: true },
  price: Number,
  createdAt: { type: String },
});
