const express = require('express');
const router = express.Router();

const patientsController = require('../../../controllers/api/v1/patients_controller');

router.get('/', patientsController.index);

router.post('/register', patientsController.register);
router.post('/:id/create_report', patientsController.createReport);
router.get('/:id/all_reports', patientsController.getReports);

module.exports = router;
