import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import "./DoctorDashboard.css";

const DoctorDashboard = () => {
  return (
    <div className="doctor-dashboard">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default DoctorDashboard;
