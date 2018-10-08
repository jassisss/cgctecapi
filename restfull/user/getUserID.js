module.exports = function (server, knex, errs) {

	server.get('/user/:id', (req, res, next) => {
	    
	    const { id } = req.params;

	    knex('user')
	        .where('id', id)
	        .first()
	        .then((dados) => {
	            if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
	            res.send(dados);
	        }, next)
	        
	});

}