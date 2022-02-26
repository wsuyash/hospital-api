// Imports
const express = require('express');
const router = express.Router();

// Import the doctors controller
const doctorsApi = require('../../../controllers/api/v1/doctors_api');

// Routes
router.post('/register', doctorsApi.register);
router.post('/login', doctorsApi.login);

// Export the router
module.exports = router;