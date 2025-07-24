import React, { useState } from "react";
import axios from "axios";
import './Doctor.css';
import { useNavigate } from "react-router-dom";

const DoctorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/doctor/login", { email, password });
      alert("Doctor Login Successful!");
      console.log(res.data);
      const doctorData = res.data.doctor;
      localStorage.setItem('doctor', JSON.stringify(doctorData));
      console.log("Navigating to dashboard...");
      navigate("/doctor/dashboard");
    } catch (err) {
      console.error("Login failed:", err.response?.data || err);
    }
  };

  return (
    <div className="login-container">
      <h2>Doctor Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default DoctorLogin;
