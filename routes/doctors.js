const express = require('express');
const router = express.Router();

const doctorsController = require('../controllers/doctors_controller');

router.get('/', doctorsController.index);

router.post('/register', doctorsController.register);
router.post('/login', doctorsController.login);

module.exports = router;