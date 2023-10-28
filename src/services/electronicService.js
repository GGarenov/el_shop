const Electronic = require("../models/Electronic");

exports.create = (electronicData) => Electronic.create(electronicData);

exports.getAll = () => Electronic.find();

exports.getById = (electronicId) => Electronic.findById(electronicId);

exports.update = (electronicId, electronicData) => Electronic.findByIdAndUpdate(electronicId, electronicData);

exports.delete = (electronicId) => Electronic.findByIdAndDelete(electronicId);
