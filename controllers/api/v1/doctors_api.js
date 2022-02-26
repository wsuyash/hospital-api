const Doctor = require('../../../models/Doctor');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.register = async (req, res) => {

	const { name, email, password, confirmPassword } = req.body;

	try {
		const doctor = await Doctor.findOne({ email });

		if (doctor) {
			return res.status(400).json({
				message : 'Email already exists.'
			});
		}

		if (password !== confirmPassword) {
			return res.status(401).json({
				message : 'Passwords do not match.'
			});
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const newDoctor = new Doctor({
			name,
			email,
			password : hashedPassword
		});

		await newDoctor.save();

		return res.status(200).json({
			message : 'Doctor registered successfully.'
		});

	} catch (error) {
		return res.status(500).json({
			message : 'Something went wrong.',
			error : error.message
		});	
	}
}

module.exports.login = async (req, res) => {
	const { email, password } = req.body;

	try {
		const doctor = await Doctor.findOne({ email : req.body.email });

		if (!doctor) {
			return res.status(401).json({
				message : 'Incorrect email or password.'
			});
		}

		const isMatch = await bcrypt.compare(password, doctor.password);

		if (!isMatch) {
			return res.status(401).json({
				message : 'Incorrect email or password.'
			});
		}

		const payload = {
			id : doctor._id,
			name : doctor.name,
			email : doctor.email
		}

		const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn : '1d' });

		return res.status(200).json({
			message : 'Logged in successfully.',
			token : `Bearer ${token}`
		});


	} catch (error) {
		return res.status(500).json({
			message : 'Something went wrong.',
			error : error.message
		});	
	}
}