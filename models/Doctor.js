// Imports 
const mongoose = require('mongoose');

// Create the schema
const doctorSchema = new mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	email : {
		type : String,
		required : true,
		unique : true
	}, 
	password : {
		type : String,
		required : true
	}
}, {
	timestamps : true
});

// Create the model
const Doctor = mongoose.model('Doctor', doctorSchema);

// Export the model
module.exports = Doctor;