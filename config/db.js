const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(' MongoDB connecte');
  } catch (error) {
    console.error('Erreur de connexion à MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDB;
