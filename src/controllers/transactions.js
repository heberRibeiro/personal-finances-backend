const mongoose = require('mongoose');

const transaction = require('../models/transaction');

const findAll = async (req, res) => {
  let documents;
  await transaction
    .find((err, res) => {
      const lenght = res.length;
      const result = { lenght, transaction: res };

      documents = JSON.stringify(result);
    })
    .sort({ yearMonthDay: 1 });

  res.send(documents);
};

const findByPeriod = async (req, res) => {
  const period = req.query.period; // 2019-07

  const year = period.split('-')[0];
  const month = period.split('-')[1];

  let documents;
  await transaction
    .find({ year, month }, (err, res) => {
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
    })
    .sort({ yearMonthDay: 1 });

  res.send(documents);
};

const update = async (req, res) => {
  const id = req.params.id;
  const dataToReplacement = req.body;

  await transaction.replaceOne({ _id: id }, dataToReplacement);

  if (!req.body) {
    return res.status(400).send({
      message: 'Dados para atualização vazio',
    });
  }

  res.send({ message: 'Transaction atualizada com sucesso' });
};

const remove = async (req, res) => {
  const id = req.params.id;
  await transaction.deleteOne({ _id: id });

  res.send({ message: 'Transaction deletada com sucesso' });
};

const create = async (req, res) => {
  const data = req.body;
  await transaction.create(data);

  res.send({ message: 'Transaction criada com sucesso' });
};

module.exports = { findAll, findByPeriod, update, remove, create };
