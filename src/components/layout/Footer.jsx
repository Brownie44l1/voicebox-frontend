import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="brand-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <span className="brand-text">VoiceBox</span>
        </div>
        
        <div className="footer-content">
          <p className="footer-copyright">
            © 2026 VoiceBox — Student Complaint Management
          </p>
          <p className="footer-tagline">
            Your voice matters<span className="cursor">_</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
