import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Secure Medical Certificates with Blockchain</h1>
          <p>
            MedCertichain ensures transparency, immutability, and fraud prevention in medical certificate verification.
          </p>
          <a href="/about" className="btn">Learn More</a>
        </div>
        <img
  src="/images/Blockchain-in-Healthcare.jpg"
  alt="Blockchain in Healthcare"
  className="hero-image"
/>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose MedCertichain?</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>Immutable Records</h3>
            <p>Medical certificates stored on the blockchain cannot be altered or tampered with.</p>
          </div>
          <div className="feature-item">
            <h3>Transparent Verification</h3>
            <p>Verify the authenticity of certificates instantly using blockchain technology.</p>
          </div>
          <div className="feature-item">
            <h3>Fraud Prevention</h3>
            <p>Eliminate fraudulent certificates with decentralized trust.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-item">
            <p>"MedCertichain has revolutionized how we verify medical certificates!"</p>
            <span>- Dr. Smith, Cardiologist</span>
          </div>
          <div className="testimonial-item">
            <p>"I feel secure knowing my medical records are tamper-proof."</p>
            <span>- Jane Doe, Patient</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;