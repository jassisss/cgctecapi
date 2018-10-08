module.exports = function (server, knex, errs) {

	server.put('/user/:id', (req, res, next) => {
	    
	    const { id } = req.params;

	    var user = req.body;

	    user.date_update = new Date();

	    knex('user')
	        .where('id', id)
	        .update(user)
	        .then((dados) => {
	            if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
	            res.send('dados atualizados');
	        }, next)
	        
	});

}