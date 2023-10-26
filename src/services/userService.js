const User = require("../models/User");

exports.register = async (userData) => {
  const user = await User.create(userData);
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email });

  //validate user

  if (!user) {
    throw new Error("Invalid email or password");
  }
};
