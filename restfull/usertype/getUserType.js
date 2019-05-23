module.exports = function (server, knex, errs) {

	server.get('/usertype', (req, res, next) => {
	    
	    knex('user_type').then((dados) => {
	    	if(!dados) return res.send(new errs.NotFoundError('nada foi encontrado'))
	        res.send(dados);
	    }, next)
	    
	});
}
