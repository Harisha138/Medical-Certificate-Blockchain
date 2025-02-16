import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PatientDashboard from './components/PatientDashboard';
import DoctorDashboard from './components/DoctorDashboard';

function App() {
  const [users, setUsers] = useState([]); // Simulated user database
  const [currentUser, setCurrentUser] = useState(null); // Track logged-in user

  const handleRegister = (newUser) => {
    setUsers([...users, newUser]);
    alert('Registration successful!');
  };

  const handleLogin = (email, password) => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setCurrentUser(user);
      alert(`Logged in as ${user.role}`);
    } else {
      alert('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    alert('Logged out successfully!');
  };

  return (
    <Router>
      <Header currentUser={currentUser} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route
          path="/login"
          element={
            <LoginPage users={users} onLogin={handleLogin} />
          }
        />
        <Route
          path="/register"
          element={<RegisterPage onRegister={handleRegister} />}
        />
        <Route
          path="/patient-dashboard"
          element={
            currentUser?.role === 'patient' ? (
              <PatientDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/doctor-dashboard"
          element={
            currentUser?.role === 'doctor' ? (
              <DoctorDashboard
                doctorName={currentUser?.name}
                onLogout={handleLogout}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;