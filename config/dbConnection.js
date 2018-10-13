
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'cgctecco_jassis',
      password : 'Jssajj99-',
      database : 'cgctecco_cgctec'
    }
  });

module.exports = knex;