import React, { useState } from "react";

const MedicineList = () => {
  const [medicine, setMedicine] = useState("");
  const [medicines, setMedicines] = useState([]);

  const handleAdd = () => {
    if (medicine.trim()) {
      setMedicines([...medicines, medicine]);
      setMedicine("");
    }
  };

  return (
    <div className="medicine-section">
      <h3>Medicine List</h3>
      <input
        type="text"
        placeholder="Enter medicine name"
        value={medicine}
        onChange={(e) => setMedicine(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {medicines.map((med, i) => (
          <li key={i}>{med}</li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;
