const server = require('./config/server');
const knex = require('./config/dbConnection');
const consign = require('consign');
const errs = require('restify-errors');
const nodemailer = require('nodemailer');
const handlebars = require("node-handlebars");


server.post('/email', (req, res) => {

    const $usuario = 'contato@cgctec.com.br';
    const $senha = 'Jssajj99-';

    const hbs = handlebars.create({
        partialsDir: __dirname
    });

    hbs.engine(__dirname + "\\views\\resetPasswordCGCTec.html", {name: "Jakob"}, function (err, html) {
        if (err) {
            throw err;
        }
        const $html = "'" + html + "'";

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


        const $destinatario = 'jassis@ibist.org.br';

        const mailOptions = {
            from: 'CGC Tecnologia <' + $usuario + '>',
            to: $destinatario,
            subject: 'CGC Tecnologia - Reset de Senha',
            html: $html
        };

        transporter.sendMail(mailOptions, function (error, info) {
            return !error ? res.send('Email enviado: ' + info.response) : res.send('Erro no envio do Email: ' + error);
        });

    });


});


// rotas REST para o user_type

consign().include('./restfull/usertypes').into(server, knex, errs);

// rotas REST para o user_status

consign().include('./restfull/userstatus').into(server, knex, errs);

// rotas REST para o user

consign().include('./restfull/user').into(server, knex, errs);

// Eviando um e-mail