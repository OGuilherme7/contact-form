const express = require('express');
const path = require('node:path');
const app = express();

const router = require('./routes');

//Configurando view engine com o sendo o ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Definindo os arquivos estáticos na pasta public
app.use(express.static('public'));

//Configurando para o express ler corretamente as requisições post de formulários
app.use(express.urlencoded({ extended: true }));

//Definindo a rota na aplicação
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Abrindo servidor em http://localhost:' + PORT);
})

