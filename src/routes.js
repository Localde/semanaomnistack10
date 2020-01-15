const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

//Interessante deixas as rotas no plural
routes.post('/devs', DevController.store);

//Exporta essas rotas para reconhecimento da aplicação.
module.exports = routes;