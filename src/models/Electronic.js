const mongoose = require("mongoose");

const electronicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  damages: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  production: { type: Number, required: true },
  exploit: { type: Number },
  price: { type: Number },
});

const Electronic = mongoose.model("Electronic", electronicSchema);
module.exports = Electronic;
