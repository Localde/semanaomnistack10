const { Router } = require('express');

const routes = Router();

routes.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello OmniStack' });
});

//Exporta essas rotas para reconhecimento da aplicação.
module.exports = routes