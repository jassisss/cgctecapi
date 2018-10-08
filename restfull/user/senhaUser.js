module.exports = function (server, knex, errs) {

	server.post('/senha', function(req, res, next) {
	  
	  const md5 = require('md5');
	  
	  var email = req.body.email;
	  var password = req.body.password;
	  var password_token = '';
	  var id = 0;

	  knex('user')
	  	  .select('user.password_token', 'user.id')	
	      .where('user.email', email)
	      .first()
	      .then((dados) => {
	          if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
	          password_token = dados.password_token;
	          id = dados.id;
	          password = md5(password + password_token);
	          knex('user')
	              .where('id', id)
	              .update('user.password', password)
	              .then((dados) => {
	                  if(!dados) return res.send(new errs.BadRequestError('erro na alteração'))
	                  res.send('senha atualizada');
	              }, next)

	      }, next);

	});

}