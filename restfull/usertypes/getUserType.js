module.exports = function (server, knex, errs) {

	server.get('/usertypes', (req, res, next) => {
	    
	    knex('user_type').then((dados) => {
	    	if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
	        res.send(dados);
	    }, next)
	    
	});
}
