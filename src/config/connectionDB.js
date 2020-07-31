const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const { DB_CONNECTION } = process.env;

const connect = () =>
  mongoose.connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const close = () => mongoose.connection.close();

module.exports = { connect, close };
