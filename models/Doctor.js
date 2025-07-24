const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  medicalLicenseNumber: { type: String, required: true, unique: true },
  hospitalName: { type: String, required: true },
  speciality: { type: String, required: true },
  city: { type: String, required: true },
});

module.exports = mongoose.model("Doctor", doctorSchema);
