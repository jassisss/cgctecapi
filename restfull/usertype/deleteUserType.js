module.exports = function (server, knex, errs) {

	server.del('/usertype/:id', (req, res, next) => {
	    
	    const { id } = req.params;

	    knex('user_type')
	        .where('id', id)
	        .delete()
	        .then((dados) => {
	            if(!dados) return res.send(new errs.NotFoundError('nada foi encontrado'));
	            console.log(dados);
	            res.send({id});
	        }, next)
	        
	});

}