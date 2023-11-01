import mongoose from "mongoose";

const electronicModel = new mongoose.Schema({
  category: String,
  id: Number,
  image: String,
  title: String,
  description: String,
  price: Number,
  rating: Number,
  ratingcount: Number,
  addedBy: String,
});

export const Electronic =
  mongoose.models.electronics || mongoose.model("electronics", electronicModel);
