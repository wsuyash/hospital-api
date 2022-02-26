// Imports
const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
	return res.status(200).json({
		message: 'Welcome to the Hospital API (v1).'
	});
});

router.use('/doctors', require('./doctors'));
router.use('/patients', require('./patients'));
router.use('/reports', require('./reports'));

// Export the router
module.exports = router;