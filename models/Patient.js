// Imports
const mongoose = require('mongoose');

// Create the schema
const patientSchema = new mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	phone : {
		type : String,
		required : true,
		unique : true
	}
}, {
	timestamps : true
});

// Create the model
const Patient = mongoose.model('Patient', patientSchema);

// Export the model
module.exports = Patient;