// Imports
const express = require('express');
const router = express.Router();

// Use the v1 routes
router.use('/v1', require('./v1'));

// Export the router
module.exports = router;
