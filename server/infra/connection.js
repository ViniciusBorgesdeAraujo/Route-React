const pgp = require('pg-promise')();
const bd = pgp({
  user: 'postgres',
  passoword: '123456',
  host: 'localhost',
  port: '5432',
  database: 'bd_produtos',
});

module.exports = bd;
