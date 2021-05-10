const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '07142155',
      database : 'cadastro'
    }
  });

  module.exports = knex