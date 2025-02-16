import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [role, setRole] = useState('patient'); // Default role is patient
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [licenseNumber, setLicenseNumber] = useState(''); // For doctors only
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'patient') {
      navigate('/patient-dashboard');
    } else if (role === 'doctor') {
      navigate('/doctor-dashboard');
    }
    alert(`Logged in as ${role}`);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Login to MedCertichain</h2>
        <form className="auth-form" onSubmit={handleLogin}>
          <label>Select Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>

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
            placeholder="Enter your password"
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
            </>
          )}

          <button type="submit" className="btn">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;