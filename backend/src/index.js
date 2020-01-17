const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//importa as rotas para reconhecimento da aplicação
const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://Localde:localde@cluster0-tfkmt.mongodb.net/week10?retryWrites=true&w=majority', {
    //removendo os avisos que irá aparecer no terminal #erros
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json()); // Esse comando tem que vir antes do comando use(routes) pois a execução é feita de forma linear.
app.use(routes); // CADASTRAMENTO DA ROTAS

// Métodos HTTP: get, post, put, delete # Métodos semânticas.

// Tipos de parâmetros: 

// Query Params: request.query (Filtros, ordemação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello OmniStack' });
});

app.listen(3333);