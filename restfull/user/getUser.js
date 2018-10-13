module.exports = function (server, knex, errs) {

	server.get('/user', (req, res, next) => {
	    
	    knex('user').then((dados) => {
	    	if(!dados) return res.send(new errs.NotFoundError('nada foi encontrado'))
	        res.send(dados);
	    }, next)
	    
	});

}