const mongoose = require('mongoose');
const dotenv = require('dotenv');

/*
 * Reads the file
 * ".env" by default
 */
dotenv.config();

/**
 * Database Connection
 */
const { DB_CONNECTION } = process.env;

console.log('Starting connection to MongoDB...');
mongoose.connect(
  DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  err => {
    if (err) {
      connectedToMongoDB = false;
      console.error(`MongoDB connection error - ${err}`);
    }
  },
);

module.exports = mongoose;
