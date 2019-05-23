const server = require('./config/server');
const knex = require('./config/dbConnection');
const consign = require('consign');
const errs = require('restify-errors');

// rotas para envio de emails

consign().include('./email/').into(server, knex, errs);

// rotas REST para o user_type

consign().include('./restfull/usertype').into(server, knex, errs);

// rotas REST para o user_status

consign().include('./restfull/userstatus').into(server, knex, errs);

// rotas REST para o product

consign().include('./restfull/product').into(server, knex, errs);

// rotas REST para o user

consign().include('./restfull/user').into(server, knex, errs);

// Eviando um e-mail