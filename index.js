const express = require('express');

const app = express();

//ROTA GET DE TESTE:
app.get('/', (req, res)=>{
    res.send('REPOSTA DA ROTA RAIZ');
});

//ROTA GET DE LISTAGEM DE DENTISTAS:
app.get('/listagemDentistas', (req, res)=>{
    res.send('REPOSTA DA ROTA DE LISTAGEM DE DENTISTAS!');
});

app.listen(3000, ()=>{
    console.log('APLICAÇÃO RODANDO EM - http://localhost:3000');
});