//Puxa o dotenv para configurar
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes =require('./routes');
//criando o servidor
const server = express();
//Ajuda em termos de cors, podendo facilitar a requisição da api
server.use(cors());
//Ajuda com a questão de facilidade de acesso a dados (post,gets,puts,...)
server.use(bodyParser.urlencoded({extended:false}));
server.use('/api',routes);
server.listen(process.env.PORT, ()=>{
    console.log(`SERVIDOR RODANDO NA PORTA : ${process.env.PORT}`);
})