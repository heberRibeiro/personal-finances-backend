const mongoose = require('mongoose');

let schema = mongoose.Schema({
  _id: String,
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

const transaction = mongoose.model('transaction', schema);

module.exports = transaction;
