module.exports = function (server, knex, errs) {

    server.get('/product', (req, res, next) => {

        knex('product').then((dados) => {
            if(!dados) return res.send(new errs.NotFoundError('nada foi encontrado'))
            res.send(dados);
        }, next)

    });

}