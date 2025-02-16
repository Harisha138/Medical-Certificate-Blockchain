import React, { useState } from 'react';

const DoctorDashboard = ({ doctorName, onLogout }) => {
  const [issuedCertificates, setIssuedCertificates] = useState([]);
  const [formData, setFormData] = useState({
    patientName: '',
    medicalCondition: '',
    issueDate: '', // Keep issue date for now (can be replaced with blockchain timestamp later)
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Issue a new certificate
  const handleIssueCertificate = (e) => {
    e.preventDefault();
    const newCertificate = {
      id: issuedCertificates.length + 1,
      ...formData,
    };
    setIssuedCertificates([...issuedCertificates, newCertificate]);
    setFormData({
      patientName: '',
      medicalCondition: '',
      issueDate: '',
    });
    alert('Medical certificate issued successfully!');
  };

  // Simulate blockchain verification
  const handleVerifyCertificate = (id) => {
    const certificate = issuedCertificates.find((cert) => cert.id === id);
    if (certificate) {
      alert(
        `Certificate Verified:\nPatient: ${certificate.patientName}\nCondition: ${certificate.medicalCondition}\nIssue Date: ${certificate.issueDate}`
      );
    } else {
      alert('Certificate not found.');
    }
  };

  return (
    <div className="dashboard">
      <h2>Doctor Dashboard</h2>
      <p>Welcome, Dr. {doctorName}!</p>


      {/* Issue Certificate Form */}
      <form onSubmit={handleIssueCertificate} className="dashboard-form">
        <h3>Issue Medical Certificate</h3>
        <label>Patient Name</label>
        <input
          type="text"
          name="patientName"
          placeholder="Enter patient's name"
          value={formData.patientName}
          onChange={handleChange}
          required
        />

        <label>Medical Condition</label>
        <input
          type="text"
          name="medicalCondition"
          placeholder="Describe medical condition"
          value={formData.medicalCondition}
          onChange={handleChange}
          required
        />

        <label>Issue Date</label>
        <input
          type="date"
          name="issueDate"
          value={formData.issueDate}
          onChange={handleChange}
          required
        />

<label>Expiry Date</label>
<input
type="date"
name="expiryDate"
value={formData.expiryDate}
onChange={handleChange}
required
/>

        <button type="submit" className="btn">Issue Certificate</button>
      </form>

      {/* Issued Certificates List */}
      <div className="issued-certificates">
        <h3>Issued Certificates</h3>
        {issuedCertificates.length > 0 ? (
          <ul>
            {issuedCertificates.map((cert) => (
              <li key={cert.id}>
                <strong>Patient:</strong> {cert.patientName},{' '}
                <strong>Condition:</strong> {cert.medicalCondition},{' '}
                <strong>Issue Date:</strong> {cert.issueDate}
                <button
                  className="btn verify-btn"
                  onClick={() => handleVerifyCertificate(cert.id)}
                >
                  Verify
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No certificates issued yet.</p>
        )}
      </div>
    </div>
  );
};

export default DoctorDashboard;