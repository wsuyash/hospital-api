const Doctor = require('../../../models/Doctor');
const Patient = require('../../../models/Patient');
const Report = require('../../../models/Report');

module.exports.register = async (req, res) => {
	const { name, phone } = req.body;

	try {
		const patient = await Patient.findOne({ phone });

		if (patient) {
			return res.status(400).json({
				message: 'Patient already exists.',
				data : patient
			});
		}

		const newPatient = new Patient({
			name,
			phone
		});

		await newPatient.save();

		return res.status(200).json({
			message: 'Patient registered successfully.'
		});
	
	} catch (error) {
		return res.status(500).json({
			message : 'Something went wrong.',
			error : error.message
		});	
	}

}

module.exports.createReport = async (req, res) => {
	const doctorId = req.user._id;
	const patientId = req.params.id;
	const status = req.body.status;
	try {
		const doctor = await Doctor.findById(doctorId);

		if (!doctor) {
			return res.status(400).json({
				message: 'Doctor not found.'
			});
		}

		const patient = await Patient.findById(patientId);

		if (!patient) {
			return res.status(400).json({
				message: 'Patient not found.'
			});
		}

		const newReport = new Report({
			patientId,
			patientName : patient.name,
			doctorName : doctor.name,
			status
		});
		
		await newReport.save();

		return res.status(200).json({
			message: 'Report created successfully.',
			report : newReport
		});
	} catch (error) {
		return res.status(500).json({
			message : 'Something went wrong.',
			error : error.message
		});		
	}
}

module.exports.getReports = async (req, res) => {
	const patientId = req.params.id;

	try {
		const reports = await Report.find({ patientId }).sort({ createdAt : -1 });

		if (!reports) {
			return res.status(400).json({
				message: 'No reports found.'
			});
		}

		return res.status(200).json({
			message: 'Reports fetched successfully.',
			reports
		});

	} catch (error) {
		return res.status(500).json({
			message : 'Something went wrong.',
			error : error.message
		});
	}
}