const mongoose = require('mongoose');


const TransactionModel = require('../models/TransactionModel');

const findAll = async (req, res) => {
  
  let documents;
  await TransactionModel.find((err, res) => {
   documents = JSON.stringify(res)
  })
  res.send(documents)
}

module.exports = { findAll }
