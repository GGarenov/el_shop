const mongoose = require("mongoose");

// Define the schema for the Electronic collection
const electronicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  damages: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  production: { type: Number, required: true },
  exploit: { type: Number },
  price: { type: Number },
  buy: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// Create the Electronic model from the schema
const Electronic = mongoose.model("Electronic", electronicSchema);
module.exports = Electronic;
