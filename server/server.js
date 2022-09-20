const express = require('express');
const server = express();
const port = 80;

server.use('/', require('./route/produtosRoute'));

server.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});
