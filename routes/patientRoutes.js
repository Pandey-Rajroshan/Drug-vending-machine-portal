const express = require('express');
const { registerPatient } = require('../controllers/patientController'); 
const { loginPatient} = require("../controllers/patientLogin");
const router = express.Router();

// POST /api/patient/register
router.post('/register', registerPatient);
router.post('/login', loginPatient);
module.exports = router;
