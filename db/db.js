const mongoose = require('mongoose');

const connectDB = async (url) => {
  try {
    return await mongoose
      .connect(url)
      .then(console.log('Connected to MongoDB'));
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;
