module.exports.index = (req, res) => {
	return res.status(200).json({
		message: 'This is reports home page.'
	});
}

module.exports.getStatusReports = (req, res) => {
	return res.status(200).json({
		message: 'This is get reports with a status page.'
	});
}