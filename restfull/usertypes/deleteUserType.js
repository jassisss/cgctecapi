module.exports = function (server, knex, errs) {

	server.del('/usertypes/:id', (req, res, next) => {
	    
	    const { id } = req.params;

	    knex('user_type')
	        .where('id', id)
	        .delete()
	        .then((dados) => {
	            if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
	            res.send('dados excluidos');
	        }, next)
	        
	});

}