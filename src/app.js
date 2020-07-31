const express = require('express');
const cors = require('cors');

const database = require('./config/connectionDB');
const routes = require('./routes');

const app = express();

const configureExpress = () => {
  app.use(cors());
  app.use(express.json());
  app.use('/', routes);
  app.database = database;

  return app;
};

module.exports = async () => {
  const app = configureExpress();
  await app.database.connect();

  console.info('Database connection established');

  return app;
};
