// Imports
const mongoose = require('mongoose');

// Create the schema
const reportSchema = new mongoose.Schema({
	patientId : {
		type : mongoose.Schema.Types.ObjectId,
		ref : 'Patient',
	},
	patientName : {
		type : String,
		required : true
	},
	doctorName : {
		type : String,
		required : true
	},
	status : {
		type : String,
		default : 'Negative',
		enum : ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit']
	}
}, {
	timestamps : true
});

// Create the model
const Report = mongoose.model('Report', reportSchema);

// Export the model
module.exports = Report;