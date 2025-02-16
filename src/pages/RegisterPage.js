import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [role, setRole] = useState('patient'); // Default role is patient
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [licenseNumber, setLicenseNumber] = useState(''); // For doctors only
  const [specialization, setSpecialization] = useState(''); // For doctors only
  const [hospital, setHospital] = useState(''); // For doctors only

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulate registration based on role
    alert(`Registered as ${role}: ${name}`);
    console.log({ name, email, password, role, licenseNumber, specialization, hospital });
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Register with MedCertichain</h2>
        <form className="auth-form" onSubmit={handleRegister}>
          <label>Select Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>

          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {role === 'doctor' && (
            <>
              <label>Medical License Number</label>
              <input
                type="text"
                placeholder="Enter your medical license number"
                value={licenseNumber}
                onChange={(e) => setLicenseNumber(e.target.value)}
                required
              />

              <label>Specialization</label>
              <input
                type="text"
                placeholder="Enter your specialization (e.g., Cardiology)"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                required
              />

              <label>Hospital Affiliation</label>
              <input
                type="text"
                placeholder="Enter your hospital name"
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
                required
              />
            </>
          )}

          <button type="submit" className="btn">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login here</Link>.
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;