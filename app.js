const express = require('express');
const cors = require('cors');

const routes = require('./src/routes/routes');

const app = express();
app.use(cors());
app.use(express.json());

/**
 * Root route
 */
app.get('/api/', (_, response) => {
  response.send({
    message: 'Welcome to the release API. Go to / transaction and follow the guidelines',
  });
});

/**
 * Main app routes
 */
app.use('/api/transaction', routes);

module.exports = app;
