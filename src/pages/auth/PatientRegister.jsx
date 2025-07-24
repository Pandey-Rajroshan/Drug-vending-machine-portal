import React, { useState } from "react";
import axios from "axios";
import "./PatientRegister.css";

const PatientRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contactNumber: "",
    age: "",
    gender: "",
    address: "",
    dateOfBirth: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/patient/register", formData);
      alert("Patient Registered Successfully!");
      console.log(res.data);

      // Optional: Reset form
      setFormData({
        name: "",
        email: "",
        password: "",
        contactNumber: "",
        age: "",
        gender: "",
        address: "",
        dateOfBirth: "",
        emergencyContactName: "",
        emergencyContactNumber: "",
      });
    } catch (err) {
      console.error("Registration failed:", err.response?.data || err);
      alert("Registration failed. Please check all fields.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}  className="patient-register-container">
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="text" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <input type="text" name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
        <input type="text" name="emergencyContactName" placeholder="Emergency Contact Name" value={formData.emergencyContactName} onChange={handleChange} required />
        <input type="text" name="emergencyContactNumber" placeholder="Emergency Contact Number" value={formData.emergencyContactNumber} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default PatientRegister;
