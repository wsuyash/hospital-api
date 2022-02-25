// Imports
require('dotenv').config();
const express = require('express');
const db = require('./config/mongoose');

// Port
const PORT = process.env.PORT || 3000;

// Initialize express
const app = express();

// Body Parser
// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', require('./routes/api/v1'));

// Start server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});