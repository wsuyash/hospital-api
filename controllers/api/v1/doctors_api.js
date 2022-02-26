// Imports
const Doctor = require('../../../models/Doctor');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new doctor
module.exports.register = async (req, res) => {

	// Get data from the request body
	const { name, email, password, confirmPassword } = req.body;

	try {
		// Find the doctor by email
		const doctor = await Doctor.findOne({ email });

		// If the doctor already exists, return an error
		if (doctor) {
			return res.status(400).json({
				message : 'Email already exists.'
			});
		}

		// If password and confirmPassword do not match, return an error
		if (password !== confirmPassword) {
			return res.status(401).json({
				message : 'Passwords do not match.'
			});
		}

		// Create a hash of the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create a new doctor document
		const newDoctor = new Doctor({
			name,
			email,
			password : hashedPassword
		});

		// Save the doctor document
		await newDoctor.save();

		// Return a success message
		return res.status(200).json({
			message : 'Doctor registered successfully.'
		});

	} catch (error) {
		// Return an error message
		return res.status(500).json({
			message : 'Something went wrong.',
			error : error.message
		});	
	}
}

// Login a doctor
module.exports.login = async (req, res) => {
	// Get data from the request body
	const { email, password } = req.body;

	try {
		// Find the doctor by email
		const doctor = await Doctor.findOne({ email : req.body.email });

		// If the doctor does not exist, return an error
		if (!doctor) {
			return res.status(401).json({
				message : 'Incorrect email or password.'
			});
		}

		// Compare the password with the hashed password in the database
		const isMatch = await bcrypt.compare(password, doctor.password);

		// If the password is incorrect, return an error
		if (!isMatch) {
			return res.status(401).json({
				message : 'Incorrect email or password.'
			});
		}

		// Create payload for the token
		const payload = {
			id : doctor._id,
			name : doctor.name,
			email : doctor.email
		}

		// Create the token
		const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn : '1d' });

		// Return success message and the token
		return res.status(200).json({
			message : 'Logged in successfully.',
			token : `Bearer ${token}`
		});

	} catch (error) {
		// Return an error message
		return res.status(500).json({
			message : 'Something went wrong.',
			error : error.message
		});	
	}
}