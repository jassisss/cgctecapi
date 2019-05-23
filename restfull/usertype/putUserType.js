module.exports = function (server, knex, errs) {

	server.put('/usertype/:id', (req, res, next) => {
	    
	    const { id } = req.params;

	    knex('user_type')
	        .where('id', id)
	        .update(req.body)
	        .then((dados) => {
	            if(!dados) return res.send(new errs.NotFoundError('erro na alteração'))
	            res.send(id);
	        }, next)
	        
	});

}