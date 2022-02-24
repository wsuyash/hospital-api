require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

// Body Parser
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', require('./routes/api/v1'));

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});