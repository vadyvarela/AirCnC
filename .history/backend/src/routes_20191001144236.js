const express = require('express');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/users', SessionController);

module.exports = routes;