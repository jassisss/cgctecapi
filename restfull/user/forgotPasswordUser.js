module.exports = function (server, knex, errs) {

	server.post('/forgotpassword', function(req, res, next) {
	  
	  const md5 = require('md5');
	  
	  var email = req.body.email;
	  var password = req.body.password;
	  var password_reset_token = req.body.password_reset_token;
	  var password_reset_token_expired = new Date();
	  var id = 0;

	  knex('user')
	  	  .select('user.password_token', 'user.id', 'user.password_reset_token', 'user.password_reset_token_expired')
	      .where('user.email', email)
	      .first()
	      .then((dados) => {
	          if(!dados) return res.send(new errs.NotFoundError('Email não encontrado'));
	          if (password_reset_token !== dados.password_reset_token)  return res.send(new errs.UnauthorizedError('Token invalido'));
	          if (password_reset_token_expired > dados.password_reset_token_expired) return res.send(new errs.RequestExpiredError('Token expirou'));
	          id = dados.id;
              password_token = dados.password_token;
	          password = md5(password + password_token);
	          knex('user')
	              .where('id', id )
	              .update('user.password', password)
	              .then((dados) => {
	                  if(!dados) return res.send(new errs.BadRequestError('Erro na atualização'))
	                  res.send('senha atualizada');
	              }, next)

	      }, next);

	});

}