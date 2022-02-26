// Imports
const express = require('express');
const passport = require('passport');
const router = express.Router();

// Import the patients controller
const patientsController = require('../../../controllers/api/v1/patients_controller');

// Routes
router.post('/register', passport.authenticate('jwt', {session : false}),patientsController.register);
router.post('/:id/create_report', passport.authenticate('jwt', {session : false}), patientsController.createReport);
router.get('/:id/all_reports', passport.authenticate('jwt', {session : false}), patientsController.getReports);

// Export the router
module.exports = router;