const express = require('express');
const router = express.Router();

const reportsController = require('../../../controllers/api/v1/reports_controller');

router.get('/', reportsController.index);
router.get('/:status', reportsController.getStatusReports);

module.exports = router;
