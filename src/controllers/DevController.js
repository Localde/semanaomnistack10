const axios = require('axios');
const Dev = require('../models/Dev');

//Abstraido do routes.js e convertido para uma Função Nomeada.
//Criando Função Nomeada
module.exports = {
    async store(request, response) {
        //Busca os dados do Dev que deseja cadastrar.
        const { github_username, techs, latitude, longitude } = request.body;

        //Url: da API do github usando crase para permitir colocar variaveis
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

        //Os dados da resposta
        const { name = login, avatar_url, bio } = apiResponse.data;

        const techsArray = techs.split(',').map(tech => tech.trim());

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        };

        const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location
        })

        return response.json(dev);
    }
};
