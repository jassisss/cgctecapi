module.exports = function (server, knex, errs) {

	server.put('/user/:id', (req, res, next) => {
	    
	    const { id } = req.params;

	    knex('user')
	        .where('id', id)
	        .update(req.body)
	        .then((dados) => {
	            if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
	            res.send('dados atualizados');
	        }, next)
	        
	});

}