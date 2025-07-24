import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="features-page">
      {/* Hero Banner */}
      <section className="features-hero">
        <div className="hero-content">
          <h1>Advanced Features for Modern Medication Access</h1>
          <p>Discover how MediDispense's smart technology is revolutionizing pharmacy services</p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="core-features">
        <h2>Core Features</h2>
        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3>24/7 Availability</h3>
            <p>Access medications anytime, day or night, without waiting for pharmacy hours</p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-prescription-bottle-alt"></i>
            </div>
            <h3>Prescription Verification</h3>
            <p>Secure digital prescription validation with real-time doctor verification</p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-robot"></i>
            </div>
            <h3>Automated Dispensing</h3>
            <p>Precision robotics handle and package medications with 99.9% accuracy</p>
          </div>

          {/* Feature 4 */}
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-temperature-low"></i>
            </div>
            <h3>Climate Control</h3>
            <p>Temperature-regulated compartments for sensitive medications</p>
          </div>

          {/* Feature 5 */}
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-bell"></i>
            </div>
            <h3>Refill Reminders</h3>
            <p>Automated notifications when your prescription needs renewal</p>
          </div>

          {/* Feature 6 */}
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Tamper-Proof Security</h3>
            <p>Biometric access and surveillance for controlled substances</p>
          </div>
        </div>
      </section>

      {/* Technology Deep Dive */}
      <section className="technology-section">
        <div className="tech-content">
          <h2>Advanced Technology</h2>
          <div className="tech-features">
            <div className="tech-item">
              <h3>AI-Powered Inventory</h3>
              <p>Machine learning predicts demand and optimizes stock levels</p>
            </div>
            <div className="tech-item">
              <h3>Blockchain Records</h3>
              <p>Immutable prescription history for enhanced security</p>
            </div>
            <div className="tech-item">
              <h3>IoT Monitoring</h3>
              <p>Real-time machine health and medication condition tracking</p>
            </div>
          </div>
        </div>
        <div className="tech-image">
          {/* Placeholder for technology illustration */}
          <div className="tech-visual"></div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="safety-features">
        <h2>Safety & Compliance</h2>
        <div className="safety-grid">
          <div className="safety-card">
            <div className="safety-icon">🛡️</div>
            <h3>HIPAA Compliant</h3>
            <p>Full patient data protection meeting healthcare standards</p>
          </div>
          <div className="safety-card">
            <div className="safety-icon">🔍</div>
            <h3>Dose Verification</h3>
            <p>Triple-check system for medication accuracy</p>
          </div>
          <div className="safety-card">
            <div className="safety-icon">⚠️</div>
            <h3>Drug Interaction Alerts</h3>
            <p>Automated system flags potential dangerous combinations</p>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="integration-section">
        <h2>Seamless Integrations</h2>
        <p className="integration-subtitle">MediDispense works with your existing healthcare ecosystem</p>
        <div className="integration-logos">
          <div className="logo-item">EHR Systems</div>
          <div className="logo-item">Health Insurance</div>
          <div className="logo-item">Telemedicine</div>
          <div className="logo-item">Pharmacy Networks</div>
        </div>
      </section>
    </div>
  );
};

export default Features;
