const setupApp = require('./app');

const APP_PORT = process.env.PORT || 3001;

(async () => {
  try {
    const app = await setupApp();
    const server = app.listen(APP_PORT, () => {
      console.info(`App running on port ${APP_PORT}`);
    });

    const exitSignals = ['SIGINT', 'SIGTERM', 'SIGQUIT'];
    exitSignals.map((sig) =>
      process.on(sig, () =>
        server.close((err) => {
          if (err) {
            console.error(err);
            process.exit(1);
          }
          app.database.connection.close(function () {
            console.info('Database connection closed!');
            process.exit(0);
          });
        }),
      ),
    );
    //
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
