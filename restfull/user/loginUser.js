module.exports = function (server, knex, errs) {

	server.post('/login', function(req, res, next) {
	  
	  const md5 = require('md5');
	  
	  var email = req.body.email;
	  var password = req.body.password;

	  knex('user')
	  	  .select('user.password_token')	
	      .where('user.email', email)
	      .first()
	      .then((dados) => {
	          if(!dados) return res.send(new errs.NotFoundError('Email não encontrado'));
	          password_token = dados.password_token;
	          password = md5(password + password_token);
	      	  knex
	      	      .select('user.id','user.name','user.email','user.date_create','user.date_update', 'user.user_type_id', 'user_type.name as typeName', 'user.user_status_id', 'user_status.name as statusName' )
	      	      .from('user')
	      	      .innerJoin('user_type', 'user.user_type_id', 'user_type.id')
	      	      .innerJoin('user_status', 'user.user_status_id', 'user_status.id')
	      	      .where('user.password', password)
	      	      .first()
	      	      .then((dados) => {
	      	          if(!dados) return res.send(new errs.UnauthorizedError('Usuário ou senha incorretos'));
	      	          token = md5(password + password_token + new Date());
	      	          dados.token = token;
	      	          res.send(dados);
	      	      }, next)

	      }, next);

	});

}