const express = require('express');
const cors=require('cors');
const routes =require('./routes');

const app = express();

app.use(cors(
    // {origin: 'http://meuapp.com'}
    ))
app.use(express.json());
app.use(routes);
/**
 * app.use(express.json()) <-isso indica que vou receber as informações via json e tranforma json em um objeto "itendivel" para o js
 **/


app.listen(process.env.PORT || 3333)