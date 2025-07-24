// import React from "react";

// const Sidebar = () => {
//   // Hardcoded data for now – replace with real doctor data
//   const doctor = {
//     name: "Dr. Harit Verma",
//     email: "drharit@example.com",
//     hospital: "Max Health",
//     speciality: "Cardiologist",
//     city: "Jammu"
//   };

//   return (
//     <div className="sidebar">
//       <h3>Doctor Details</h3>
//       <p><strong>Name:</strong> {doctor.name}</p>
//       <p><strong>Email:</strong> {doctor.email}</p>
//       <p><strong>Hospital:</strong> {doctor.hospital}</p>
//       <p><strong>Speciality:</strong> {doctor.speciality}</p>
//       <p><strong>City:</strong> {doctor.city}</p>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const storedDoctor = localStorage.getItem("doctor");
    if (storedDoctor) {
      setDoctor(JSON.parse(storedDoctor));
    }
  }, []);

  if (!doctor) return <p>Loading doctor info...</p>;

  return (
    <div className="sidebar">
      <h3>Doctor Details</h3>
      <p><strong>Name:</strong> {doctor.name}</p>
      <p><strong>Email:</strong> {doctor.email}</p>
      <p><strong>Hospital:</strong> {doctor.hospitalName}</p>
      <p><strong>Speciality:</strong> {doctor.speciality}</p>
      <p><strong>City:</strong> {doctor.city}</p>
    </div>
  );
};

export default Sidebar;

