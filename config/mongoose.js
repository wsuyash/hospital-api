// Import mongoose
const mongoose = require('mongoose');

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI);

// Get the connection
const db = mongoose.connection;

// On error
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// On connection successful
db.once('open', console.log.bind(console, 'MongoDB connected!'));

// Export the connection
module.exports = db;