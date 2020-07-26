const mongoose = require('mongoose');

let schema = mongoose.Schema({
  _is: String,
  description: String,
  value: Number,
  category: String,
  year: Number,
  month: Number,
  day: Number,
  yearMonth: String,
  yearMonthDay: String,
  type: String,
});

const TransactionModel = mongoose.model('transaction', schema);

module.exports = TransactionModel;
