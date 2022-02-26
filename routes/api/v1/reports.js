// Imports
const express = require('express');
const passport = require('passport');
const router = express.Router();

// Import the routers controller
const reportsApi = require('../../../controllers/api/v1/reports_api');

// Routes
router.get('/:status', passport.authenticate('jwt', {session : false}), reportsApi.getStatusReports);

// Export the router
module.exports = router;