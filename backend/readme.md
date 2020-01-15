Legendas:

----------------------------------------------------------------------------------------
require(): É usado para incluir módulos(Frameworks, API's ou Bibliotecas) existentes em arquivos separados. Exemplo: 

const express = require('express');
----------------------------------------------------------------------------------------
express(): É um Framework para Node.js inspirado no Sinatra. Exemplo:

const app = express();
----------------------------------------------------------------------------------------
get(): É um método usado para obter uma rota.
Exemplo:

app.get('/users', (request, response) => {return response.send('Hello World');}); #Com rota | arrow function
	
ou

app.get('/', (request, response) => {return response.send('Hello World';)}); #Sem rota | arrow function
-----------------------------------------------------------------------------------------
send(): Esta função serve para printar uma resposta automatica, após executar um evento.
Exemplo:

return response.send('Hello World');
-----------------------------------------------------------------------------------------
listen(): É uma função do framework express, que cria uma porta onde será feito a conecção do framework.
Exemplo:

app.listen(3333);
------------------------------------------------------------------------------------------
script simplicar a execução: 
"scripts": {
	"dev": "nodemon index.js"
}

Depois é só digitar: yarn dev
------------------------------------------------------------------------------------------
insomnia: App que testa rotas da API.
------------------------------------------------------------------------------------------
mongodb: Banco de Dados.
------------------------------------------------------------------------------------------
mongoose: É uma biblioteca que dara acesso ao node para dentro do Banco de Dados do MongoDB. 
Exemplo:
powershell - yarn add mongoose
arquivo.js - const mongoose = require('mongoose');
------------------------------------------------------------------------------------------
Ps: atalho ctrl + space: mostra sugestões de código.
------------------------------------------------------------------------------------------
portquiz.net:27017 - Verifica se está por traz de um proxy.

Se mostrar: You have reached this page on port 27017 - Está certo, senão estará errado e não funcionára o banco de dados.
------------------------------------------------------------------------------------------
{ }: Importar funções especificas de um módulo.
Exemplo:
const { Router } = require('express');

const routes = Router();
------------------------------------------------------------------------------------------
module.exports: A exportação é usada para permitir o reconhecimento do módulo pela aplicação, para ser importado em outros arquivos.
Exemplo:
Arquivo1 exporta 
Arquivo2 importa o arquivo 1
 module.exports = mongoose.model('Dev', DevSchema);
------------------------------------------------------------------------------------------
axios: Biblioteca usada para consumir API's.
Download:
yarn add axios
exemplo:
const axios = require('axios');
------------------------------------------------------------------------------------------
Adicionando API: const response = axios.get(`endereço-da-api`)
------------------------------------------------------------------------------------------
async: Tag que significa que pode demorar para responder.
await: aguarda o programa responder para depois continuar o processamento do código.

Exemplo:

routes.post('/devs', async (request, response) => {
    //Busca os dados do Dev que deseja cadastrar.
    const { github_username } = request.body;

    //Url: da API do github usando crase para permitir colocar variaveis
    const response = await axios.get(`https://api.github.com/users/${github_username}`)

    return response.json({ message: 'Hello OmniStack' });
});
-------------------------------------------------------------------
MongoDB Compass Community: 

https://www.mongodb.com/download-center/compass

------------------------------------------------------------------