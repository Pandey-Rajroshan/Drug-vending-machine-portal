const express = require("express");
const router = express.Router();
const { registerDoctor } = require("../controllers/doctorControllers");
const { loginDoctor } = require('../controllers/doctorLogin');

// Route to register a doctor
router.post("/register", registerDoctor);

// POST /api/doctor/login
router.post('/login', loginDoctor);
module.exports = router;
