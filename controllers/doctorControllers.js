const Doctor = require("../models/Doctor.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Controller for Doctor Registration
const registerDoctor = async (req, res) => {
  const { name, email, password, medicalLicenseNumber, hospitalName, speciality, city } = req.body;

  try {
    // Check if doctor already exists
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ message: "Doctor already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new doctor
    const doctor = new Doctor({
      name,
      email,
      password: hashedPassword,
      medicalLicenseNumber,
      hospitalName,
      speciality,
      city,
    });

    // Save the doctor to the database
    await doctor.save();

    // Generate JWT token for the doctor
    const token = jwt.sign({ doctorId: doctor._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({
      message: "Doctor registered successfully",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerDoctor };
