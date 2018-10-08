module.exports = function (server, knex, errs) {

	server.put('/usertypes/:id', (req, res, next) => {
	    
	    const { id } = req.params;

	    knex('user_type')
	        .where('id', id)
	        .update(req.body)
	        .then((dados) => {
	            if(!dados) return res.send(new errs.BadRequestError('erro na alteração'))
	            res.send('dados atualizados');
	        }, next)
	        
	});

}