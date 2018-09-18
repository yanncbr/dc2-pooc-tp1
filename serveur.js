const express = require('express')
  const app = express()
  const port = 3000
  app.get('/', (request, response) => {
    response.send('<h1> Bonjour</h1>')
})
  app.get('/hello/:name', (request, response) => {
    response.send('Hello, '+request.params.name+'!');
})
  app.listen(port, (err) => {
    if (err) {
      return console.log('Erreur du serveur : ', err)
    }
    console.log('Le serveur écoute sur le port' + port + 'nRendez vous sur http://localhost:' + port
  )})
