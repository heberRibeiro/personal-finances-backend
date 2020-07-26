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

const findByPeriod = async (req, res) => {
  const period = req.query.period; // 2019-07

  const year = period.split('-')[0];
  const month = period.split('-')[1];

  let documents;
  await TransactionModel.find({ year, month }, (err, res) => {
    const lenght = res.length;

    const income = res.reduce((acc, curr) => {
      if (curr.type === '+') {
        acc += curr.value;
      }
      return acc;
    }, 0);

    const expenses = res.reduce((acc, curr) => {
      if (curr.type === '-') {
        acc += curr.value;
      }
      return acc;
    }, 0);

    const balance = income - expenses;

    let result = { lenght, income, expenses, balance, transaction: res };

    documents = JSON.stringify(result);
  });

  res.send(documents);
};

const update = async (req, res) => {
  const id = req.params.id;
  const dataToReplacement = req.body;

  await TransactionModel.replaceOne({ _id: id }, dataToReplacement);

  if (!req.body) {
    return res.status(400).send({
      message: 'Dados para atualização vazio',
    });
  }

  res.send({ message: 'Grade atualizado com sucesso' });
};

module.exports = { findAll, findByPeriod, update };
