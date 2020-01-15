const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
//Interessante deixas as rotas no plural
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

//Exporta essas rotas para reconhecimento da aplicação.
module.exports = routes;