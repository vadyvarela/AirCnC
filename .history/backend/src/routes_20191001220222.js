const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/uploads')

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');

const routes = express.Router();
const uploads = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', uploads.single('thumbnail'), SpotController.store);
routes.get('/dashboard', DashboardController.show);

module.exports = routes;