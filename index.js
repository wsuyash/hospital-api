// Imports
require('dotenv').config();
const express = require('express');
const passport = require('passport');
const passportJwt = require('./config/passport-jwt-strategy');
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

// Passport
app.use(passport.initialize());

// Routes
app.use('/', require('./routes'));

// Start server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});