const db = require('../infra/connection');

exports.getProdutos = function () {
  return db.query('SELECT = FROM produtos');
};

exports.getProduto = function (id) {
  return db.oneOrNone(`SELECT * FROM produto WHERE id = $1`, [id]);
};
