const express = require('express');
const router = express.Router();
const produtosService = require('../service/produtosService');

router.get('/produtos', async function (req, res) {
  res.setHeader('Acess-Control-Allon-Origin', '*');
  let produtos = await produtosService.getProdutos();
  res.json(produtos);
});

router.get('/produtos/:id', async function (req, res) {
  res.setHeader('Acess-Control-Allon-Origin', '*');
  let id = req.params.id;
  let produtos = await produtosService.getProdutos(id);
  res.json(produtos);
});

module.exports = router;
