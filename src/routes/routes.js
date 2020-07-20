const express = require('express');
const router = express.Router();

const transactionService = require('../services/transactionService');

router.get('/', transactionService.findAll);
router.get('/period', transactionService.findByPeriod);

module.exports = router;
