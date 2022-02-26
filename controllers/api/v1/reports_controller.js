// Imports
const Report = require('../../../models/Report');

// Get all reports of a particular status
module.exports.getStatusReports = async (req, res) => {

	// Get the status from the request params
	const status = req.params.status;

	try {
		// Find all reports of the particular status
		const reports = await Report.find({status : status});

		// If no reports are found, return a message
		if (!reports) {
			return res.status(404).json({
				message : 'No reports found'
			});
		}

		// Return a success message and the reports
		return res.status(200).json({
			success : true,
			data : reports
		});		
	} catch (error) {
		// Return an error message
		return res.status(500).json({
			message : 'Something went wrong',
			error : error.message
		});	
	}
}