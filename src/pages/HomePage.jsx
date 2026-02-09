import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/shared/Button';
import './HomePage.css';

const HomePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Animated Background */}
        <div className="hero-background">
          <div className="grid-pattern"></div>
          <div className="gradient-overlay"></div>
          <div className="orb orb-1 animate-float"></div>
          <div className="orb orb-2 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="light-beam light-beam-1"></div>
          <div className="light-beam light-beam-2"></div>
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <span className="pulse-dot">
              <span className="pulse-ring animate-pulse-slow"></span>
              <span className="pulse-core"></span>
            </span>
            Your Voice, Your Campus
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            <span className="title-line">Speak Up.</span>
            <span className="title-line gradient-text animate-shimmer">Be Heard.</span>
            <span className="title-line">Stay Safe.</span>
          </h1>

          {/* Subheading */}
          <p className="hero-subtitle">
            A secure platform for students to voice concerns, file complaints, and drive positive change—anonymously or authenticated.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            {user ? (
              <Button size="large" onClick={() => navigate('/dashboard')}>
                Go to Dashboard
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            ) : (
              <>
                <Button size="large" onClick={() => navigate('/submit-anonymous')}>
                  File a Complaint
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
                <Button variant="secondary" size="large" onClick={() => navigate('/login')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    <polyline points="10 17 15 12 10 7"></polyline>
                    <line x1="15" y1="12" x2="3" y2="12"></line>
                  </svg>
                  Student Login
                </Button>
              </>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="trust-indicators">
            <div className="trust-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="trust-icon trust-icon-green">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span>End-to-End Encrypted</span>
            </div>
            <div className="trust-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="trust-icon trust-icon-blue">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>100% Anonymous Option</span>
            </div>
            <div className="trust-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="trust-icon trust-icon-purple">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Verified by Administration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Preview */}
      <section className="demo-preview-section">
        <div className="demo-container">
          {/* Corner Accents */}
          <div className="corner-accent corner-top-left"></div>
          <div className="corner-accent corner-top-right"></div>
          <div className="corner-accent corner-bottom-left"></div>
          <div className="corner-accent corner-bottom-right"></div>

          {/* Terminal/Card */}
          <div className="step-card">
            {/* Window Controls */}
            <div className="step-card-header">
              <div className="window-controls-wrapper">
                <div className="window-dots">
                  <div className="window-dot window-dot-red"></div>
                  <div className="window-dot window-dot-yellow"></div>
                  <div className="window-dot window-dot-green"></div>
                </div>
                <span className="window-title">Quick Start</span>
              </div>
              <div className="terminal-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 17 10 11 4 5"></polyline>
                  <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="step-card-content">
              {/* Step 1 */}
              <div className="demo-step">
                <div className="step-number step-number-blue">1</div>
                <div className="step-text">
                  <h3 className="step-title">Choose Your Approach</h3>
                  <p className="step-description">
                    File anonymously for complete privacy or login with your student ID for tracked resolution updates
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="demo-step">
                <div className="step-number step-number-purple">2</div>
                <div className="step-text">
                  <h3 className="step-title">Describe Your Concern</h3>
                  <p className="step-description">
                    Detail your complaint with evidence, category tags, and urgency level—we protect your identity
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="demo-step">
                <div className="step-number step-number-pink">3</div>
                <div className="step-text">
                  <h3 className="step-title">Track Resolution</h3>
                  <p className="step-description">
                    Receive real-time updates as your complaint moves through review, investigation, and resolution
                  </p>
                </div>
              </div>

              {/* Success Message */}
              <div className="success-message">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="success-icon">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <p className="success-text">
                  <span className="success-bold">Average resolution time: 3-5 days</span> • Your voice matters
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-background grid-pattern"></div>
        <div className="section-content">
          <div className="section-header">
            <h2>Why Students Choose VoiceBox</h2>
            <p>Built for students, by students. Every feature designed with your privacy and convenience in mind.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-svg feature-svg-blue">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <span className="feature-number">01</span>
              </div>
              <h3>Complete Anonymity</h3>
              <p>Submit complaints without revealing your identity. Your privacy is protected at every step.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-svg feature-svg-purple">
                    <path d="M18 20V10"></path>
                    <path d="M12 20V4"></path>
                    <path d="M6 20v-6"></path>
                  </svg>
                </div>
                <span className="feature-number">02</span>
              </div>
              <h3>Real-Time Tracking</h3>
              <p>Monitor your complaint status from submission to resolution with live updates.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-svg feature-svg-pink">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <span className="feature-number">03</span>
              </div>
              <h3>Admin Dashboard</h3>
              <p>Administrators can efficiently manage, assign, and resolve student complaints.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-svg feature-svg-blue">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                  </svg>
                </div>
                <span className="feature-number">04</span>
              </div>
              <h3>Category Tags</h3>
              <p>Organize complaints by category: Academic, Facilities, Harassment, Technical, and more.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-svg feature-svg-purple">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <span className="feature-number">05</span>
              </div>
              <h3>Priority Levels</h3>
              <p>Set complaint urgency from Low to Critical to ensure proper attention and response time.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-svg feature-svg-pink">
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <span className="feature-number">06</span>
              </div>
              <h3>Complaint History</h3>
              <p>View complete audit trail with status changes, admin notes, and resolution updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="vertical-line"></div>
        <div className="how-it-works-content">
          <div className="section-header">
            <h2>Three Simple Steps</h2>
            <p>From submission to resolution, the process is straightforward and transparent.</p>
          </div>

          <div className="steps-container">
            {/* Step 1 */}
            <div className="workflow-step">
              <div className="workflow-step-text">
                <div className="workflow-step-number">
                  <span className="workflow-number-display">01</span>
                  <div className="workflow-divider"></div>
                </div>
                <h3 className="workflow-step-title">Submit Your Complaint</h3>
                <p className="workflow-step-description">
                  Choose to submit anonymously or with your account. Fill in the details, select a category and priority level, then submit.
                </p>
              </div>
              <div className="workflow-step-visual">
                <div className="visual-corner visual-corner-tl"></div>
                <div className="visual-corner visual-corner-tr"></div>
                <div className="visual-corner visual-corner-bl"></div>
                <div className="visual-corner visual-corner-br"></div>
                <div className="workflow-card">
                  <div className="workflow-card-header">
                    <span className="workflow-card-title">complaint-form</span>
                    <div className="workflow-card-dots">
                      <div className="workflow-dot"></div>
                      <div className="workflow-dot"></div>
                      <div className="workflow-dot"></div>
                    </div>
                  </div>
                  <div className="workflow-card-body">
                    <div className="workflow-item">
                      <div className="workflow-bullet workflow-bullet-blue"></div>
                      <span className="workflow-text">Title: "Broken AC in Library"</span>
                    </div>
                    <div className="workflow-item">
                      <div className="workflow-bullet workflow-bullet-purple"></div>
                      <span className="workflow-text">Category: Facilities</span>
                    </div>
                    <div className="workflow-item">
                      <div className="workflow-bullet workflow-bullet-pink"></div>
                      <span className="workflow-text">Priority: High</span>
                    </div>
                    <div className="workflow-success">
                      ✓ Complaint submitted successfully
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="workflow-step workflow-step-reverse">
              <div className="workflow-step-text">
                <div className="workflow-step-number">
                  <span className="workflow-number-display workflow-number-purple">02</span>
                  <div className="workflow-divider workflow-divider-purple"></div>
                </div>
                <h3 className="workflow-step-title">Track Progress</h3>
                <p className="workflow-step-description">
                  Use your tracking code or dashboard to monitor status changes. Receive updates as admins review and work on your complaint.
                </p>
              </div>
              <div className="workflow-step-visual">
                <div className="visual-corner visual-corner-tl visual-accent-purple"></div>
                <div className="visual-corner visual-corner-tr visual-accent-purple"></div>
                <div className="visual-corner visual-corner-bl visual-accent-purple"></div>
                <div className="visual-corner visual-corner-br visual-accent-purple"></div>
                <div className="workflow-card">
                  <div className="workflow-card-header">
                    <span className="workflow-card-title">status-tracker</span>
                    <div className="workflow-card-dots">
                      <div className="workflow-dot"></div>
                      <div className="workflow-dot"></div>
                      <div className="workflow-dot"></div>
                    </div>
                  </div>
                  <div className="workflow-card-body">
                    <div className="workflow-item">
                      <div className="workflow-bullet workflow-bullet-green"></div>
                      <span className="workflow-text">Submitted - Jan 15, 2026</span>
                    </div>
                    <div className="workflow-item">
                      <div className="workflow-bullet workflow-bullet-blue"></div>
                      <span className="workflow-text">In Progress - Jan 16, 2026</span>
                    </div>
                    <div className="workflow-item">
                      <div className="workflow-bullet workflow-bullet-gray"></div>
                      <span className="workflow-text workflow-text-muted">Resolved - Pending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="workflow-step">
              <div className="workflow-step-text">
                <div className="workflow-step-number">
                  <span className="workflow-number-display workflow-number-pink">03</span>
                  <div className="workflow-divider workflow-divider-pink"></div>
                </div>
                <h3 className="workflow-step-title">Get Resolution</h3>
                <p className="workflow-step-description">
                  Once resolved, you'll be notified with the outcome. Review the resolution details and mark as closed when satisfied.
                </p>
              </div>
              <div className="workflow-step-visual">
                <div className="visual-corner visual-corner-tl visual-accent-pink"></div>
                <div className="visual-corner visual-corner-tr visual-accent-pink"></div>
                <div className="visual-corner visual-corner-bl visual-accent-pink"></div>
                <div className="visual-corner visual-corner-br visual-accent-pink"></div>
                <div className="workflow-card">
                  <div className="workflow-card-header">
                    <span className="workflow-card-title">resolution</span>
                    <div className="workflow-card-dots">
                      <div className="workflow-dot"></div>
                      <div className="workflow-dot"></div>
                      <div className="workflow-dot"></div>
                    </div>
                  </div>
                  <div className="workflow-card-body">
                    <div className="resolution-box">
                      <div className="resolution-header">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="resolution-check">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span className="resolution-status">Resolved</span>
                      </div>
                      <p className="resolution-text">
                        AC unit has been repaired. Facilities team tested and confirmed working.
                      </p>
                      <div className="resolution-date">
                        Resolved on: Jan 18, 2026
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-background grid-pattern"></div>
        <div className="about-content">
          <h2>About VoiceBox</h2>
          <p className="about-text">
            VoiceBox is a modern student complaint management system designed to bridge the gap between students and administration. We believe every student deserves to be heard, whether they choose to speak up publicly or remain anonymous.
          </p>
          <p className="about-text">
            Built with privacy, transparency, and efficiency in mind, VoiceBox empowers students to voice their concerns while providing administrators with the tools they need to respond quickly and effectively.
          </p>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value stat-value-blue">100%</div>
              <div className="stat-label">Anonymous Option</div>
            </div>
            <div className="stat-item">
              <div className="stat-value stat-value-purple">24/7</div>
              <div className="stat-label">Complaint Tracking</div>
            </div>
            <div className="stat-item">
              <div className="stat-value stat-value-pink">Fast</div>
              <div className="stat-label">Response Time</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;