import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home';
import Features from './pages/Features';
import Login from './pages/auth/PatientLogin.jsx';
import Register from './pages/auth/PatientRegister.jsx';
import DoctorRegister from "./pages/auth/DoctorRegister";
import DoctorLogin from "./pages/auth/DoctorLogin";
import DoctorDashboard from "./components/DoctorDashboard/DoctorDashboard";
import PatientDashboard from './components/PatientDashboard.jsx';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/doctor" element={<DoctorRegister />} />
        <Route path="/login/doctor" element={<DoctorLogin />} />
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="/patient/dashboard" element={<PatientDashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
