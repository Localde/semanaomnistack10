const express = require('express');

const app = express();

// Métodos HTTP: get, post, put, delete # Métodos semânticas.

// Tipos de parâmetros: 

// Query Params: request.query (Filtros, ordemação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello OmniStack' });
});

app.listen(3333);