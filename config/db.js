const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDb Connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Mongo server error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
