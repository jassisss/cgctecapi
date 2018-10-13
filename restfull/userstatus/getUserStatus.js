module.exports = function (server, knex, errs) {

	server.get('/userstatus', (req, res, next) => {
	    
	    knex('user_status').then((dados) => {
	    	if(!dados) return res.send(new errs.NotFoundError('nada foi encontrado'))
	        res.send(dados);
	    }, next)
	    
	});

}