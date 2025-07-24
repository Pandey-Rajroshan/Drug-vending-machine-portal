import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="medidispense-home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>24/7 Automated Medicine Dispensing</h1>
            <p>Get your prescribed medications anytime, anywhere from our smart vending machines</p>
            <div className="hero-buttons">
              <button className="primary-btn">Find a Machine</button>
              <button className="secondary-btn">How It Works</button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How MediDispense Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Find a Machine</h3>
            <p>Locate the nearest MediDispense vending machine using our map</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Verify Prescription</h3>
            <p>Scan your e-prescription or enter your prescription code</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Receive Medication</h3>
            <p>Collect your properly packaged medicine in seconds</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="benefits-content">
          <h2>Why Choose MediDispense?</h2>
          <ul className="benefits-list">
            <li>✅ 24/7 access to medications</li>
            <li>✅ No pharmacy wait times</li>
            <li>✅ Secure, tamper-proof packaging</li>
            <li>✅ Real-time inventory tracking</li>
            <li>✅ Emergency medication access</li>
          </ul>
        </div>
        <div className="benefits-image">
          {/* This would be an image of the vending machine */}
          <div className="machine-placeholder"></div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="locations">
        <h2>Find a MediDispense Machine Near You</h2>
        <div className="location-search">
          <input type="text" placeholder="Enter your location or zip code" />
          <button className="primary-btn">Search</button>
        </div>
        <div className="map-placeholder">
          {/* This would be a map component */}
          <p>Interactive map would display here</p>
        </div>
      </section>
    </div>
  );
};

export default Home;