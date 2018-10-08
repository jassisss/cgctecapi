module.exports = function (server, knex, errs) {

	server.post('/user', (req, res, next) => {

		const md5 = require('md5');

		var user = req.body;

		user.date_create = new Date();
		user.date_update = new Date();
		user.password_token = md5(new Date());
		user.password = md5(user.password + user.password_token);
	    
	    knex('user')
	        .insert(user)
	        .then((dados) => {
	        	if(!dados) return res.send(new errs.BadRequestError('erro na inclusão'))
	            res.send(dados);
	        }, next)
	    
	});

}