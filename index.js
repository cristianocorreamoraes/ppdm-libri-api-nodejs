const express = require('express');

const app = express();

//IMPORTAÇÃO DO ARQUIVO DE ROTAS DE LIVROS
const livrosController = require('./controller/LivroController');

app.use('/', livrosController);

app.listen(3000, ()=>{
    console.log('APLICAÇÃO RODANDO EM - http://localhost:3000');
});