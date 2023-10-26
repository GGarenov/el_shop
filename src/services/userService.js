const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.register = async (userData) => {
  const user = await User.create(userData);
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email });

  //validate user

  if (!user) {
    throw new Error("Invalid email or password");
  }

  //validate password
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("Invalid email or password");
  }
  return user;
};
