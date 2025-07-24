const bcrypt = require('bcryptjs');
const Patient = require('../models/patientModel'); // Import the Patient model

// POST /api/patient/login
exports.loginPatient = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the patient exists
    const patient = await Patient.findOne({ email });
    if (!patient) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare password
    const isMatch = await patient.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({
        success: true,
        message: 'Login successful',
        patient: {
          id: patient._id,
          name: patient.name,
          email: patient.email,
          contactNumber: patient.contactNumber,
          address: patient.address,
        },
      });
      
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
