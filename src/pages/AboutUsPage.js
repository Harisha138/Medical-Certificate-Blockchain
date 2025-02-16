import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="about-page">
      {/* Mission Statement */}
      <section className="mission-section">
        <h2>About MedCertichain</h2>
        <p>
          At MedCertichain, we leverage blockchain technology to create a secure, transparent, and efficient system for
          issuing and verifying medical certificates. Our mission is to eliminate fraud and build trust in healthcare documentation.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2>Benefits of Using MedCertichain</h2>
        <ul className="benefits-list">
          <li>
            <h3>Decentralized Storage</h3>
            <p>Data is stored across a distributed network, ensuring no single point of failure.</p>
          </li>
          <li>
            <h3>Tamper-Proof Records</h3>
            <p>Once data is written to the blockchain, it cannot be altered or deleted.</p>
          </li>
          <li>
            <h3>Instant Verification</h3>
            <p>Verify the authenticity of medical certificates in seconds.</p>
          </li>
        </ul>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Join the Revolution</h2>
        <p>Be part of a secure and transparent healthcare ecosystem. Sign up today!</p>
        <a href="/register" className="btn">Get Started</a>
      </section>
    </div>
  );
};

export default AboutUsPage;