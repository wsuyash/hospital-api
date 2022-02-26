const Report = require('../../../models/Report');

module.exports.getStatusReports = async (req, res) => {

	const status = req.params.status;

	try {
		const reports = await Report.find({status : status});

		if (!reports) {
			return res.status(404).json({
				message : 'No reports found'
			});
		}

		return res.status(200).json({
			success : true,
			data : reports
		});		
	} catch (error) {
		res.status(500).json({
			message : 'Something went wrong',
			error : error.message
		});	
	}
}