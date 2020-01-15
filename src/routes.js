const { Router } = require('express');
const axios = require('axios');

const routes = Router();

//Interessante deixas as rotas no plural
routes.post('/devs', (request, response) => {
    //Busca os dados do Dev que deseja cadastrar.
    const { github_username } = request.body;



    return response.json({ message: 'Hello OmniStack' });
});

//Exporta essas rotas para reconhecimento da aplicação.
module.exports = routes;