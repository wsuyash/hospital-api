// Imports
const express = require('express');
const passport = require('passport');
const router = express.Router();

// Import the patients controller
const patientsApi = require('../../../controllers/api/v1/patients_api');

// Routes
router.post('/register', passport.authenticate('jwt', {session : false}),patientsApi.register);
router.post('/:id/create_report', passport.authenticate('jwt', {session : false}), patientsApi.createReport);
router.get('/:id/all_reports', passport.authenticate('jwt', {session : false}), patientsApi.getReports);

// Export the router
module.exports = router;