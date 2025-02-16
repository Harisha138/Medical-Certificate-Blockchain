import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    role: 'patient',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    licenseNumber: '', // For doctors only
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.password || formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (formData.role === 'doctor' && !formData.licenseNumber) newErrors.licenseNumber = 'License number is required for doctors';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onRegister(formData); // Notify App.js of new user
      navigate('/login');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Register with MedCertichain</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>Select Role</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          {formData.role === 'doctor' && (
            <>
              <label>Medical License Number</label>
              <input
                type="text"
                name="licenseNumber"
                placeholder="Enter your medical license number"
                value={formData.licenseNumber}
                onChange={handleChange}
              />
              {errors.licenseNumber && <p className="error">{errors.licenseNumber}</p>}
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