const Patient = require('../models/patientModel');
const bcrypt = require('bcryptjs');

// POST /api/patient/register
exports.registerPatient = async (req, res) => {
    const { name, email, password, dateOfBirth, contactNumber, address, emergencyContactName, emergencyContactNumber } = req.body;
  
    try {
      // Check if patient already exists
      const existingPatient = await Patient.findOne({ email });
      if (existingPatient) {
        return res.status(400).json({ message: 'Patient with this email already exists' });
      }
  
      // Create a new patient
      const newPatient = new Patient({
        name,
        email,
        password, // Save the password directly, will be hashed in the pre-save hook
        dateOfBirth,
        contactNumber,
        address,
        emergencyContactName,
        emergencyContactNumber,
      });
  
      // Save the patient to the database
      await newPatient.save();
  
      res.status(201).json({
        message: 'Patient registered successfully',
        patient: {
          id: newPatient._id,
          name: newPatient.name,
          email: newPatient.email,
          contactNumber: newPatient.contactNumber,
        },
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };