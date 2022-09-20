const produtosData = require('../data/produtosData');

exports.getProdutos = function () {
  return produtosData.getProdutos();
};

exports.getProduto = function (id) {
  return produtosData.getProduto(id);
};
