module.exports.index = (req, res) => {
	return res.status(200).json({
		message: 'This is patients home page.'
	});
}

module.exports.register = (req, res) => {
	return res.status(200).json({
		message: 'This is patients register endpoint.'
	});
}

module.exports.createReport = (req, res) => {
	return res.status(200).json({
		message: 'This is patients create report page.'
	});
}

module.exports.getReports = (req, res) => {
	return res.status(200).json({
		message: 'This is patients get reports page.'
	});
}