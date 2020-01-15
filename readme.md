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
listen(): É uma função do framework express, que cria uma porta onde será feito a conecção do framewor.
Exemplo:

app.listen(3333);
------------------------------------------------------------------------------------------
script simplicar a execução: 
"scripts": {
	"dev": "nodemon index.js"
}

Depois é só digitar: yarn dev
------------------------------------------------------------------------------------------
