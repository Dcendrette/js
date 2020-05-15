const express = require('express');

const app = express();

app.get('/', (req, res) => { //requisição no diretorio raiz "req=atualizacao de pagina, autenticação ...etc "res"= resposta 
    res.send("Hello Nodemon");
});

app.listen(3001);



