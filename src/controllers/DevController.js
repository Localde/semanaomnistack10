const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

//index, show, store, update, destroy

//Abstraido do routes.js e convertido para uma Função Nomeada.
//Criando Função Nomeada
module.exports = {
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },
    async store(request, response) {
        //Busca os dados do Dev que deseja cadastrar.
        const { github_username, techs, latitude, longitude } = request.body;

        //Entra no banco de dados e procura um registro de dev que contenha esse github_username que esta sendo recebido nesta requisição
        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            //Url: da API do github usando crase para permitir colocar variaveis
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            //Os dados da resposta
            const { name = login, avatar_url, bio } = apiResponse.data;

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
        }
        
        return response.json(dev);
    }
};
