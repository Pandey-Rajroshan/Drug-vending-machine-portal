import React, { useState } from "react";

const AddPatientForm = () => {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    diagnosis: ""
  });

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Patient added:", patient);
    alert("Patient details added.");
    setPatient({ name: "", age: "", gender: "", diagnosis: "" });
  };

  return (
    <form className="patient-form" onSubmit={handleSubmit}>
      <h3>Add Patient Details</h3>
      <input name="name" placeholder="Name" value={patient.name} onChange={handleChange} required />
      <input name="age" placeholder="Age" type="number" value={patient.age} onChange={handleChange} required />
      <input name="gender" placeholder="Gender" value={patient.gender} onChange={handleChange} required />
      <input name="diagnosis" placeholder="Diagnosis" value={patient.diagnosis} onChange={handleChange} required />
      <button type="submit">Save Patient</button>
    </form>
  );
};

export default AddPatientForm;
