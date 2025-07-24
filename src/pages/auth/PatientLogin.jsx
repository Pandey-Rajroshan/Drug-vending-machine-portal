import React, { useState } from "react";
import axios from "axios";
import "./PatientLogin.css";
import { useNavigate } from 'react-router-dom';

const PatientLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/patient/login", { email, password });
      alert("Patient Login Successful!");
      console.log(res.data);
  
      if (res.data.success) {
        localStorage.setItem('patientToken', res.data.token);
        localStorage.setItem('patient', JSON.stringify(res.data.patient));
        navigate('/patient/dashboard');
      } else {
        alert('Login failed!');
      }
    } catch (err) {
      console.error("Login failed:", err.response?.data || err);
      alert("Invalid email or password!");
    }
  };
  

  return (
    <div className = "login-container">
      <h2>Patient Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default PatientLogin;
