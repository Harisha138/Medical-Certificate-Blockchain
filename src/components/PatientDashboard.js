import React, { useState } from 'react';

const PatientDashboard = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    medicalCondition: '',
    doctorName: '',
    hospitalName: '',
    issueDate: '',
    expiryDate: '',
    supportingDocuments: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, supportingDocuments: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submitting data to the blockchain
    console.log('Submitting to blockchain:', formData);
    alert('Medical certificate details submitted successfully!');
  };

  return (
    <div className="dashboard">
      <h2>Patient Dashboard</h2>
      <p>Fill in the details below to issue a medical certificate.</p>
      <form onSubmit={handleSubmit} className="dashboard-form">
        {/* Patient Name */}
        <label>Patient Name</label>
        <input
          type="text"
          name="patientName"
          placeholder="Enter your full name"
          value={formData.patientName}
          onChange={handleChange}
          required
        />

        {/* Medical Condition */}
        <label>Medical Condition</label>
        <input
          type="text"
          name="medicalCondition"
          placeholder="Describe your medical condition"
          value={formData.medicalCondition}
          onChange={handleChange}
          required
        />

        {/* Doctor's Name */}
        <label>Doctor's Name</label>
        <input
          type="text"
          name="doctorName"
          placeholder="Enter your doctor's name"
          value={formData.doctorName}
          onChange={handleChange}
          required
        />

        {/* Hospital Name */}
        <label>Hospital Name</label>
        <input
          type="text"
          name="hospitalName"
          placeholder="Enter the hospital name"
          value={formData.hospitalName}
          onChange={handleChange}
          required
        />

        {/* Issue Date */}
        <label>Certificate Issue Date</label>
        <input
          type="date"
          name="issueDate"
          value={formData.issueDate}
          onChange={handleChange}
          required
        />

        {/* Expiry Date */}
        {/* <label>Certificate Expiry Date</label>
        <input
          type="date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          required
        /> */}

        {/* Supporting Documents */}
        <label>Upload Supporting Documents (Optional)</label>
        <input
          type="file"
          name="supportingDocuments"
          onChange={handleFileChange}
        />

        {/* Submit Button */}
        <button type="submit" className="btn">Submit to Blockchain</button>
      </form>
    </div>
  );
};

export default PatientDashboard;