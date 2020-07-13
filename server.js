const app = require('./app');
const mongoose = require('./connectionDB');

const { connection } = mongoose;

connection.once('open', () => {
  connectedToMongoDB = true;
  console.log('Connected to MongoDB');

  /**
   * Port definition and
   * app launch
   */
  const APP_PORT = process.env.PORT || 3001;
  app.listen(APP_PORT, () => {
    console.log(`Server started on port ${APP_PORT}`);
  });
});
