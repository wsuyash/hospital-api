const express = require('express');
const router = express.Router();

const patientsApi = require('../../../controllers/api/v1/patients_api');

router.get('/', patientsApi.index);

router.post('/register', patientsApi.register);
router.post('/:id/create_report', patientsApi.createReport);
router.get('/:id/all_reports', patientsApi.getReports);

module.exports = router;