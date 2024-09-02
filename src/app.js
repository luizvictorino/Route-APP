const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const clientRoute = require('./routes/clientRoute')

// Configuração middleware - execução entre a requisição e execução da aplicação
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/cliente', clientRoute)

module.exports = app;
