// Imports
const express = require('express');
const router = express.Router();

// Use the api routes
router.use('/api', require('./api'));

// Export the router
module.exports = router;