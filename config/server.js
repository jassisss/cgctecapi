const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware')

const server = restify.createServer({
  name: 'app-cgctec',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

const cors = corsMiddleware({
  origins: ['*'],
  allowHeaders: ['Content-Type'],
  allowMethods: ['PUT, GET, POST, DELETE, OPTIONS']
});


server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});

server.pre(cors.preflight)
server.use(cors.actual)

module.exports = server;