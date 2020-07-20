const express = require('express');
const router = express.Router();

const transactionService = require('../services/transactionService');

router.get('/', transactionService.findAll);

module.exports = router;
