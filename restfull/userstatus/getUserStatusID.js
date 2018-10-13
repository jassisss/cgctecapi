module.exports = function (server, knex, errs) {

	server.get('/userstatus/:id', (req, res, next) => {
	    
	    const { id } = req.params;
	    
	    knex('user_status')
	        .where('id', id)
	        .first()
	        .then((dados) => {
	            if(!dados) return res.send(new errs.NotFoundError('nada foi encontrado'))
	            res.send(dados);
	        }, next)

	});

}