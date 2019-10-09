const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/uploads')

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');

const routes = express.Router();
const uploads = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', uploads.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

// Rotas para aceitar e rejeitar 
routes.post('/bookings/:booking_id/approves', ApprovalController.store);
routes.post('/bookings/:booking_id/rejects', RejectionController.store);

module.exports = routes;