import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Button from '../../components/shared/Button';
import StatusBadge from '../../components/complaint/StatusBadge';
import Alert from '../../components/shared/Alert';
import Loading from '../../components/shared/Loading';
import './AdminPages.css';

const AdminComplaintManagement = () => {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);
  const [history, setHistory] = useState([]);
  const [newStatus, setNewStatus] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchComplaint();
  }, [id]);

  const fetchComplaint = async () => {
    try {
      const { data } = await api.get(`/complaints/${id}`);
      setComplaint(data.data.complaint);
      setHistory(data.data.history || []);
      setNewStatus(data.data.complaint.status);
    } catch (err) {
      console.error('Error fetching complaint:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    setUpdating(true);
    setSuccess('');

    try {
      await api.patch(`/admin/complaints/${id}/status`, { status: newStatus, notes });
      setSuccess('Status updated successfully!');
      setNotes('');
      fetchComplaint();
    } catch (err) {
      console.error('Error updating status:', err);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <Loading />;
  if (!complaint) return <div className="error-page">Complaint not found</div>;

  return (
    <div className="page-container">
      <div className="detail-container">
        <Button variant="outline" onClick={() => navigate('/admin')}>
          ← Back to Admin Dashboard
        </Button>

        <div className="detail-header">
          <h1>{complaint.title}</h1>
          <StatusBadge status={complaint.status} />
        </div>

        <div className="detail-meta">
          <span>📁 {complaint.category}</span>
          <StatusBadge status={complaint.priority} type="priority" />
          <span>📅 {new Date(complaint.submittedAt).toLocaleDateString()}</span>
          <span>👤 {complaint.isAnonymous ? 'Anonymous' : complaint.submittedBy?.name || 'N/A'}</span>
        </div>

        <div className="detail-section">
          <h3>Description</h3>
          <p>{complaint.description}</p>
        </div>

        <div className="detail-section">
          <h3>Update Status</h3>
          {success && <Alert type="success" message={success} />}
          <form onSubmit={handleUpdateStatus} className="status-form">
            <div className="form-row">
              <div className="form-group">
                <label>Status</label>
                <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)} required>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Notes (Optional)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows="3"
                placeholder="Add any notes about this status change..."
              />
            </div>
            <Button type="submit" disabled={updating}>
              {updating ? 'Updating...' : 'Update Status'}
            </Button>
          </form>
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
                      <p>Status: <strong>{update.oldStatus}</strong> → <strong>{update.newStatus}</strong></p>
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

export default AdminComplaintManagement;
