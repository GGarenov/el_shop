const Electronic = require("../models/Electronic");

exports.create = (electronicData) => Electronic.create(electronicData);

exports.getAll = () => Electronic.find();

exports.getById = (electronicId) => Electronic.findById(electronicId);
