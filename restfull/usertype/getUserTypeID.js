module.exports = function (server, knex, errs) {
	
	server.get('/usertype/:id', (req, res, next) => {
	    
	    const { id } = req.params;
	    
	    knex('user_type')
	        .where('id', id)
	        .first()
	        .then((dados) => {
	            if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
	            res.send(dados);
	        }, next)

	});

}