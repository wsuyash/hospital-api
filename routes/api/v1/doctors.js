// Imports
const express = require('express');
const router = express.Router();

// Import the doctors controller
const doctorsController = require('../../../controllers/api/v1/doctors_controller');

// Routes
router.post('/register', doctorsController.register);
router.post('/login', doctorsController.login);

// Export the router
module.exports = router;