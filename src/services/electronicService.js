const Electronic = require("../models/Electronic");

exports.create = (electronicData) => Electronic.create(electronicData);

exports.getAll = () => Electronic.find();

exports.getById = (electronicId) => Electronic.findById(electronicId);

exports.update = (electronicId, electronicData) => Electronic.findByIdAndUpdate(electronicId, electronicData);

exports.delete = (electronicId) => Electronic.findByIdAndDelete(electronicId);

exports.singleElectronic = (electronicId) => Electronic.findById(electronicId);

exports.searchElectronic = (electronics, search, name, type) => {
  let filteredElectronics = [...electronics];

  if (search) {
    filteredElectronics = filteredElectronics.filter((electronic) => {
      const searchRegex = new RegExp(search, "i");
      return electronic.name.match(searchRegex) || electronic.type.match(searchRegex);
    });
  } else {
    if (name) {
      filteredElectronics = filteredElectronics.filter((electronic) => {
        const nameRegex = new RegExp(name, "i");
        return electronic.name.match(nameRegex);
      });
    }

    if (type) {
      filteredElectronics = filteredElectronics.filter((electronic) => {
        const typeRegex = new RegExp(type, "i");
        return electronic.type.match(typeRegex);
      });
    }
  }

  return filteredElectronics;
};
