module.exports.index = (req, res) => {
	return res.status(200).json({
		message: 'This is doctors home page.'
	});
}

module.exports.register = (req, res) => {
	return res.status(200).json({
		message: 'This is doctors register page.'
	});
}

module.exports.login = (req, res) => {
	return res.status(200).json({
		message: 'This is doctors login page.'
	});
}