const Electronic = require("../models/Electronic");

exports.create = (electronicData) => Electronic.create(electronicData);

exports.getAll = () => Electronic.find();

exports.getById = (electronicId) => Electronic.findById(electronicId);

exports.update = (electronicId, electronicData) => Electronic.findByIdAndUpdate(electronicId, electronicData);

exports.delete = (electronicId) => Electronic.findByIdAndDelete(electronicId);

exports.singleElectronic = (electronicId) => Electronic.findById(electronicId).populate("buy");

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

exports.addBuyToElectronic = async (electronicId, userId) => {
  try {
    const electronic = await this.singleElectronic(electronicId);

    const existingBuy = electronic.buy.find((b) => b.equals(userId)); // Compare ObjectIDs directly

    if (!existingBuy) {
      electronic.buy.push(userId);
      await electronic.save();
    }

    return electronic;
  } catch (error) {
    console.error("Error in addBuyToElectronic:", error);
    return null;
  }
};
