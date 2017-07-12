/**
 * Created by ellenrocha on 17/03/2017.
 */

process.on('uncaughtException', function (err) {
    console.log("Houve um erro não tratado na aplicação: ");
    console.error(err);
});

const express = require("express");
const consign = require("consign")();
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const app = express();


//setando o ejs para engine de views
app.set('view engine', 'ejs');

/**
 * Configuração do JS para saber de onde vai buscar as views
 */
app.set('views', './app/views/');

//setando o conteúdo estático (img, js, css);
app.use(express.static('./app/public'));

/*estamos incluindo o body-parser no projeto
 o parâmetro extended:true é para informar url vai ser codificada para passagem de parâmetros via POST.*/
app.use(bodyParser.urlencoded({extended:true}));

/**
 * o Express-Validator é utilizado para validar as informações de usuário
 */
app.use(expressValidator());

//carregando todas as rotas da aplicação
consign
    .include("app/routes")
    .then("app/models")
    .then("app/controllers")
    .into(app);

module.exports = app;