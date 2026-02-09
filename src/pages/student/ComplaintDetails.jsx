import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Button from '../../components/shared/Button';
import StatusBadge from '../../components/complaint/StatusBadge';
import Loading from '../../components/shared/Loading';
import './StudentPages.css';

const ComplaintDetails = () => {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchComplaint();
  }, [id]);

  const fetchComplaint = async () => {
    try {
      const { data } = await api.get(`/complaints/${id}`);
      setComplaint(data.data.complaint);
      setHistory(data.data.history || []);
    } catch (err) {
      console.error('Error fetching complaint:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (!complaint) return <div className="error-page">Complaint not found</div>;

  return (
    <div className="page-container">
      <div className="detail-container">
        <Button variant="outline" onClick={() => navigate('/dashboard')}>
          ← Back to Dashboard
        </Button>

        <div className="detail-header">
          <h1>{complaint.title}</h1>
          <StatusBadge status={complaint.status} />
        </div>

        <div className="detail-meta">
          <span>📁 {complaint.category}</span>
          <StatusBadge status={complaint.priority} type="priority" />
          <span>📅 {new Date(complaint.submittedAt).toLocaleDateString()}</span>
          {complaint.assignedTo && <span>👤 Assigned to: {complaint.assignedTo.name}</span>}
        </div>

        <div className="detail-section">
          <h3>Description</h3>
          <p>{complaint.description}</p>
        </div>

        {history.length > 0 && (
          <div className="detail-section">
            <h3>History</h3>
            <div className="timeline">
              {history.map((update, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <strong>{update.changeType.replace('_', ' ').toUpperCase()}</strong>
                      <span>{new Date(update.createdAt).toLocaleString()}</span>
                    </div>
                    {update.oldStatus && update.newStatus && (
                      <p>Status changed from <strong>{update.oldStatus}</strong> to <strong>{update.newStatus}</strong></p>
                    )}
                    {update.notes && <p className="timeline-notes">{update.notes}</p>}
                    <small>By: {update.updatedBy?.name || 'System'}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComplaintDetails;
