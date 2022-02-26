// Imports
const Doctor = require('../../../models/Doctor');
const Patient = require('../../../models/Patient');
const Report = require('../../../models/Report');

// Register a new patient
module.exports.register = async (req, res) => {
	// Get data from the request body
	const { name, phone } = req.body;

	try {
		// Find the patient by phone
		const patient = await Patient.findOne({ phone });

		// If the patient already exists, return the patient
		if (patient) {
			return res.status(400).json({
				message: 'Patient already exists.',
				data : patient
			});
		}

		// Create a new patient document
		const newPatient = new Patient({
			name,
			phone
		});

		// Save the patient document
		await newPatient.save();

		// Return a success message
		return res.status(200).json({
			message: 'Patient registered successfully.'
		});
	
	} catch (error) {
		// Return an error message
		return res.status(500).json({
			message : 'Something went wrong.',
			error : error.message
		});	
	}
}

// Create a new report for a patient
module.exports.createReport = async (req, res) => {
	// Get the doctor's id from the request
	const doctorId = req.user._id;
	// Get the patient's id from the request params
	const patientId = req.params.id;
	// Get status from the request body
	const status = req.body.status;

	try {
		// Find the doctor by id
		const doctor = await Doctor.findById(doctorId);

		// If the doctor does not exist, return an error
		if (!doctor) {
			return res.status(400).json({
				message: 'Doctor not found.'
			});
		}

		// Find the patient by id
		const patient = await Patient.findById(patientId);

		// If the patient does not exist, return an error
		if (!patient) {
			return res.status(400).json({
				message: 'Patient not found.'
			});
		}

		// Create a new report document
		const newReport = new Report({
			patientId,
			patientName : patient.name,
			doctorName : doctor.name,
			status
		});
		
		// Save the report document
		await newReport.save();

		// Return a success message and the newly created report
		return res.status(200).json({
			message: 'Report created successfully.',
			report : newReport
		});
	} catch (error) {
		// Return an error message
		return res.status(500).json({
			message : 'Something went wrong.',
			error : error.message
		});		
	}
}

// Get all the reports of a patient
module.exports.getReports = async (req, res) => {
	// Get the patient's id from the request params
	const patientId = req.params.id;

	try {
		// Find all the reports of the patient and sort them in ascending order
		const reports = await Report.find({ patientId }).sort({ createdAt : 1 });

		// If reports do not exist, return a message
		if (!reports) {
			return res.status(400).json({
				message: 'No reports found.'
			});
		}

		// Return a success message and the reports
		return res.status(200).json({
			message: 'Reports fetched successfully.',
			reports
		});

	} catch (error) {
		// Return an error message
		return res.status(500).json({
			message : 'Something went wrong.',
			error : error.message
		});
	}
}