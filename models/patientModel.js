const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Patient Schema
const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
  emergencyContactName: { type: String, required: true },
  emergencyContactNumber: { type: String, required: true },
}, { timestamps: true });

// Hash password before saving the patient
patientSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare passwords
patientSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
