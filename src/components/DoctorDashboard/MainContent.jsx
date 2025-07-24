import React, { useState, useRef, useEffect } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import QRCode from 'react-qr-code'; 
import './MainContent.css';

const MainContent = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    diagnosis: '',
    medicines: ['']
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [doctorData, setDoctorData] = useState(null);
  const printRef = useRef();

  useEffect(() => {
    // Fetch doctor data from localStorage on component mount
    const storedDoctorData = localStorage.getItem('doctor');
    if (storedDoctorData) {
      setDoctorData(JSON.parse(storedDoctorData));
    }
  }, []);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'medicine') {
      const meds = [...patientData.medicines];
      meds[index] = value;
      setPatientData({ ...patientData, medicines: meds });
    } else {
      setPatientData({ ...patientData, [name]: value });
    }
  };

  const addMedicineField = () => {
    setPatientData({ ...patientData, medicines: [...patientData.medicines, ''] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(patientData);
  };

  const generatePDF = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

    // Add doctor's information to PDF if doctorData is available
    if (doctorData) {
      pdf.setFontSize(12);
      pdf.text('Doctor Information:', 10, pdfHeight + 10);
      pdf.text(`Name: ${doctorData.name}`, 10, pdfHeight + 20);
      pdf.text(`Hospital: ${doctorData.hospital}`, 10, pdfHeight + 30);
      pdf.text(`Speciality: ${doctorData.speciality}`, 10, pdfHeight + 40);
      pdf.text(`City: ${doctorData.city}`, 10, pdfHeight + 50);
    }

    // Save the PDF with a new name
    pdf.save('patient-report-with-doctor.pdf');
  };

  return (
    <div className="main-content">
      <h2>Patient Report Form</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Patient Name" onChange={handleChange} required />
        <input name="age" placeholder="Age" onChange={handleChange} required />
        <input name="diagnosis" placeholder="Diagnosis" onChange={handleChange} required />

        <h4>Medicines</h4>
        {patientData.medicines.map((med, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <input
              name="medicine"
              placeholder={`Medicine ${index + 1}`}
              value={med}
              onChange={(e) => handleChange(e, index)}
              required
            />
          </div>
        ))}

        <button type="button" onClick={addMedicineField}>+ Add Medicine</button>
        <button type="submit">Save Patient</button>
      </form>

      {submittedData && (
        <div ref={printRef} style={{ marginTop: '2rem', border: '1px solid #ccc', padding: '1rem', background: 'white' }}>
          <h3>Patient Report</h3>

          {doctorData && (
            <>
              <h4>Doctor Information</h4>
              <p><strong>Name:</strong> {doctorData.name}</p>
              <p><strong>Hospital:</strong> {doctorData.hospitalName}</p>
              <p><strong>Speciality:</strong> {doctorData.speciality}</p>
              <p><strong>City:</strong> {doctorData.city}</p>
            </>
          )}

          <h4>Patient Information</h4>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
          <p><strong>Diagnosis:</strong> {submittedData.diagnosis}</p>

          <h4>Prescribed Medicines:</h4>
          <ul>
            {submittedData.medicines.map((med, i) => (
              <li key={i}>{med}</li>
            ))}
          </ul>

          <h4>QR Code for All Medicines:</h4>
          <div style={{ background: 'white', padding: '10px', width: 'fit-content' }}>
            <QRCode value={submittedData.medicines.join('\n')} size={128} />
          </div>

          <button onClick={generatePDF}>Download PDF</button>
        </div>
      )}
    </div>
  );
};

export default MainContent;
