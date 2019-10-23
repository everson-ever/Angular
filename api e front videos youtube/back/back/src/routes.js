const express = require('express');
const routes = express.Router();

const FilmesController = require('./app/controllers/FilmesController');

// Rotas /filmes
routes.get('/filmes', FilmesController.index);
routes.get('/filmes/:id', FilmesController.show);
routes.post('/filmes', FilmesController.store);
routes.put('/filmes/:id', FilmesController.update);
routes.delete('/filmes/:id', FilmesController.destroy);

module.exports = routes;
