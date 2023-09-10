const userModel = require("../models/userModels");
const bcrypt = require("bcryptjs");

// register callback
const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      res.status(200).send({ message: "User already exits", success: false });
    }
    const password = req.body.password;
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `register controller ${error.message}`,
    });
  }
};

const loginController = () => {};

module.exports = { loginController, registerController };
