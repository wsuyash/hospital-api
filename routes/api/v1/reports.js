const express = require('express');
const router = express.Router();

const reportsApi = require('../../../controllers/api/v1/reports_api');

router.get('/', reportsApi.index);
router.get('/:status', reportsApi.getStatusReports);

module.exports = router;