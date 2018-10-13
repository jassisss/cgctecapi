module.exports = function (server, knex, errs) {

	server.del('/userstatus/:id', (req, res, next) => {
	    
	    const { id } = req.params;

	    knex('user_status')
	        .where('id', id)
	        .delete()
	        .then((dados) => {
	            if(!dados) return res.send(new errs.NotFoundError('nada foi encontrado'))
	            res.send({id});
	        }, next)
	        
	});

}