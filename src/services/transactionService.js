const mongoose = require('mongoose');

const TransactionModel = require('../models/TransactionModel');

const findAll = async (req, res) => {
  let documents;
  await TransactionModel.find((err, res) => {
    const lenght = res.length;
    const result = { lenght, transaction: res };

    documents = JSON.stringify(result);
  });

  res.send(documents);
};

module.exports = { findAll };
