module.exports = function (server, knex, errs) {

	server.post('/usertype', (req, res, next) => {
	    
	    knex('user_type')
	        .insert(req.body)
	        .then((dados) => {
	        	if(!dados) return res.send(new errs.BadRequestError('erro na inclusão'));
	            res.send({dados});
	        }, next)
	    
	});

}