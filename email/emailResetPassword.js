module.exports = function (server, knex, errs) {

    const nodemailer = require('nodemailer');
    const handlebars = require("node-handlebars");
    const md5 = require('md5');
    const $usuario = 'contato@cgctec.com.br';
    const $senha = 'Jssajj99-';

    server.post('/emailresetpassword', (req, res, next) => {

        var email = req.body.email;
        var data_expired = new Date().getTime();

        knex('user')
            .select('user.name', 'user.id', 'user.password_token')
            .where('user.email', email)
            .first()
            .then((dados) => {
                if(!dados) return res.send(new errs.BadRequestError('Email não encontrado'));
                username = dados.name;
                password_token = dados.password_token;
                id = dados.id;
                password_reset_token = md5(password_token + data_expired);
                dia = data_expired + 86400000;
                minuto = data_expired + 60000;
                hora = data_expired + 360000;
                knex('user')
                    .where('id' , id )
                    .update({'password_reset_token': password_reset_token, 'password_reset_token_expired': new Date(hora)})
                    .then((dados1) => {
                        if(!dados1) return res.send(new errs.BadRequestError('Erro na insersão do token'));
                        const hbs = handlebars.create({
                            partialsDir: __dirname
                        });
                        hbs.engine(__dirname + "\\..\\views\\emailResetPasswordCGCTec.html", {name: username, email: email, token: password_reset_token }, function (err, html) {
                            if (err) {
                                throw err;
                            }
                            const $html = html;

                            const transporter = nodemailer.createTransport({
                                host: 'mail.cgctec.com.br',
                                port: 465,
                                secure: true, // use TLS
                                auth: {
                                    user: $usuario,
                                    pass: $senha
                                },
                                tls: {
                                    // do not fail on invalid certs
                                    rejectUnauthorized: false
                                }
                            });


                            const $destinatario = email;

                            const mailOptions = {
                                from: 'CGC Tecnologia <' + $usuario + '>',
                                to: $destinatario,
                                subject: 'CGC Tecnologia - Reset de Senha',
                                html: $html
                            };

                            transporter.sendMail(mailOptions, function (error, info) {
                                return !error ? res.send({'email' : email, 'data': new Date(), 'resposta': info.response}) : res.send('Erro no envio do Email: ' + error);
                            });

                        });


                    }, next)
            }, next);

    });

};

