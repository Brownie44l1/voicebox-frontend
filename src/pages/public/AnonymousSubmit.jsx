import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Button from '../../components/shared/Button';
import Alert from '../../components/shared/Alert';
import './PublicPages.css';

const AnonymousSubmit = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Academic',
    priority: 'Medium'
  });
  const [trackingCode, setTrackingCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { data } = await api.post('/complaints/anonymous', formData);
      setTrackingCode(data.data.trackingCode);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit complaint');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyCode = () => {
    navigator.clipboard.writeText(trackingCode);
  };

  if (trackingCode) {
    return (
      <div className="page-container">
        <div className="success-container">
          <div className="success-icon">✅</div>
          <h1>Complaint Submitted Successfully!</h1>
          <p>Your complaint has been submitted anonymously. Please save this tracking code to check the status later:</p>
          <div className="tracking-code-display">
            <code>{trackingCode}</code>
            <Button variant="secondary" onClick={copyCode}>
              Copy Code
            </Button>
          </div>
          <p className="warning-text">⚠️ Important: Save this code! You won't be able to recover it later.</p>
          <Link to="/track">
            <Button>Track This Complaint</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="form-container">
        <h1>Submit Anonymous Complaint</h1>
        <p className="info-text">Your identity will be kept completely anonymous. You will receive a tracking code to monitor the status.</p>
        
        {error && <Alert type="error" message={error} onClose={() => setError('')} />}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              maxLength="200"
              placeholder="Brief description of the issue"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category *</label>
              <select name="category" value={formData.category} onChange={handleChange} required>
                <option value="Academic">Academic</option>
                <option value="Facilities">Facilities</option>
                <option value="Student Services">Student Services</option>
                <option value="Harassment">Harassment</option>
                <option value="Technical">Technical</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Priority *</label>
              <select name="priority" value={formData.priority} onChange={handleChange} required>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              maxLength="2000"
              rows="6"
              placeholder="Provide detailed information about your complaint..."
            />
          </div>

          <Button type="submit" block disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Anonymous Complaint'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AnonymousSubmit;
