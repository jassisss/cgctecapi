const server = require('./config/server');
const knex = require('./config/dbConnection');
const consign = require('consign');
const errs = require('restify-errors');



// rotas REST para o user_type

consign().include('./restfull/usertypes').into(server, knex, errs);

// rotas REST para o user_status

consign().include('./restfull/userstatus').into(server, knex, errs);

// rotas REST para o user

consign().include('./restfull/user').into(server, knex, errs);







