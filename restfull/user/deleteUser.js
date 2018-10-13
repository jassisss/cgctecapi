module.exports = function (server, knex, errs) {

	server.del('/user/:id', (req, res, next) => {
	    
	    const { id } = req.params;

	    knex('user')
	        .where('id', id)
	        .delete()
	        .then((dados) => {
	            if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
	            res.send({id});
	        }, next)
	        
	});
}