const { Router } = require('express');
const axios = require('axios');

const routes = Router();

//Interessante deixas as rotas no plural
routes.post('/devs', async (request, response) => {
    //Busca os dados do Dev que deseja cadastrar.
    const { github_username } = request.body;

    //Url: da API do github usando crase para permitir colocar variaveis
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

    //Os dados da resposta
    console.log(apiResponse.data);

    return response.json({ message: 'Hello OmniStack' });
});

//Exporta essas rotas para reconhecimento da aplicação.
module.exports = routes;