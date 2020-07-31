const express = require('express');
const transactionsRouter = require('./transactions');

const router = express.Router();

router.use('/api/transaction', transactionsRouter);
router.get('/api', (req, res) => res.send({ message: 'Welcome to the release API. Go to / transaction and follow the guidelines' }));

module.exports = router;
