const express = require('express');
const router = express.Router();

const transactionService = require('../services/transactionService');

router.get('/', transactionService.findAll);
router.get('/period', transactionService.findByPeriod);
router.put('/:id', transactionService.update);
router.delete('/:id', transactionService.remove);
router.post('/', transactionService.create);

module.exports = router;
