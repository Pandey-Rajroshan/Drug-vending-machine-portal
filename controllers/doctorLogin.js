const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Doctor = require('../models/Doctor'); // Corrected model name and path

// POST /api/doctor/login
exports.loginDoctor = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if doctor exists
//     const doctor = await Doctor.findOne({ email });
//     if (!doctor) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     // Compare password
//     const isMatch = await bcrypt.compare(password, doctor.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     // Generate JWT token
//     const token = jwt.sign(
//       { doctorId: doctor._id },
//       process.env.JWT_SECRET || 'your_jwt_secret', 
//       { expiresIn: '1h' }
//     );

//     res.status(200).json({
//       message: 'Login successful',
//       token,
//       doctor: {
//         id: doctor._id,
//         name: doctor.name,
//         email: doctor.email,
//         hospitalName: doctor.hospitalName,
//         speciality: doctor.speciality,
//         city: doctor.city
//       },
//     });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };
try {
  const { email, password } = req.body;
  console.log("Login request received for:", email);

  const doctor = await Doctor.findOne({ email });
  if (!doctor) {
    console.log("Doctor not found");
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const isMatch = await bcrypt.compare(password, doctor.password);
  if (!isMatch) {
    console.log("Password does not match");
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign({ doctorId: doctor._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  console.log("Login successful, returning token...");

  res.status(200).json({ message: 'Login successful', token, doctor });
} catch (error) {
  console.error("Unexpected login error:", error);
  res.status(500).json({ message: 'Server error' });
}
}
