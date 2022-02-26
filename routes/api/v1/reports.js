// Imports
const express = require('express');
const passport = require('passport');
const router = express.Router();

// Import the routers controller
const reportsController = require('../../../controllers/api/v1/reports_controller');

// Routes
router.get('/:status', passport.authenticate('jwt', {session : false}), reportsController.getStatusReports);

// Export the router
module.exports = router;