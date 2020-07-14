const app = require('./app');
const mongoose = require('./connectionDB');

const { connection } = mongoose;

connection.once('open', () => {
  connectedToMongoDB = true;
  console.log('(2 of 3) Connected to MongoDB');

  /**
   * Port definition and
   * app launch
   */
  const APP_PORT = process.env.PORT || 3001;
  app.listen(APP_PORT, () => {
    console.log(`(3 of 3) Server started on port ${APP_PORT}`);
  });
});
