import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import './PatientDashboard.css';

const PatientDashboard = () => {
  const [patient, setPatient] = useState(null);
  const [selectedMeds, setSelectedMeds] = useState([]);
  const [showQR, setShowQR] = useState(false);

  const medicationMenu = [
    { name: 'Sanitary Pads', id: 'pads' },
    { name: 'Cough Pills', id: 'cough' },
    { name: 'Acidity Pills', id: 'acidity' },
    { name: 'ORS Solution', id: 'ors' }
  ];

  useEffect(() => {
    const storedPatient = JSON.parse(localStorage.getItem('patient'));
    setPatient(storedPatient);
  }, []);

  const handleCheckboxChange = (medName) => {
    setSelectedMeds((prevSelected) =>
      prevSelected.includes(medName)
        ? prevSelected.filter((item) => item !== medName)
        : [...prevSelected, medName]
    );
  };

  const handleGenerateQR = () => {
    if (selectedMeds.length > 0) {
      setShowQR(true);
    } else {
      alert('Please select at least one medication.');
    }
  };

  return (
    <div className="patient-dashboard">
      <h2>Welcome to Patient Dashboard</h2>

      {patient && (
        <div className="patient-info">
          <p><strong>Name:</strong> {patient.name}</p>
          <p><strong>Email:</strong> {patient.email}</p>
          <p><strong>Contact:</strong> {patient.contactNumber}</p>
          <p><strong>Address:</strong> {patient.address}</p>
        </div>
      )}

      <div className="medication-section">
        <h3>Select Basic Medications:</h3>
        {medicationMenu.map((med) => (
          <label key={med.id}>
            <input
              type="checkbox"
              checked={selectedMeds.includes(med.name)}
              onChange={() => handleCheckboxChange(med.name)}
            />
            {med.name}
          </label>
        ))}

        <button onClick={handleGenerateQR}>Generate QR Code</button>
      </div>

      {showQR && (
        <div className="qr-code">
          <h4>Scan this QR on the vending machine</h4>
          <QRCode value={selectedMeds.join(', ')} size={128} />
        </div>
      )}
    </div>
  );
};

export default PatientDashboard;
