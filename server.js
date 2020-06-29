const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const { json } = require("express");

//Iniciando o App
const app = express();

//Permite receber dados JSON
app.use(express.json());

app.use(cors());

//Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

requireDir('./src/models');
 
//Redirecionando para o arquivo de rotas
app.use('/api', require('./src/routes'));

app.listen(3001);