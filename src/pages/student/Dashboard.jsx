import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Button from '../../components/shared/Button';
import ComplaintCard from '../../components/complaint/ComplaintCard';
import Loading from '../../components/shared/Loading';
import './StudentPages.css';

const Dashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [stats, setStats] = useState({ pending: 0, inProgress: 0, resolved: 0 });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const { data } = await api.get('/complaints');
      setComplaints(data.data.complaints);
      
      const pending = data.data.complaints.filter(c => c.status === 'Pending').length;
      const inProgress = data.data.complaints.filter(c => c.status === 'In Progress').length;
      const resolved = data.data.complaints.filter(c => c.status === 'Resolved' || c.status === 'Closed').length;
      
      setStats({ pending, inProgress, resolved });
    } catch (err) {
      console.error('Error fetching complaints:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>My Complaints</h1>
          <Button onClick={() => navigate('/submit')}>
            + Submit New Complaint
          </Button>
        </div>

        <div className="stats-grid">
          <div className="stat-card stat-pending">
            <div className="stat-value">{stats.pending}</div>
            <div className="stat-label">Pending</div>
          </div>
          <div className="stat-card stat-progress">
            <div className="stat-value">{stats.inProgress}</div>
            <div className="stat-label">In Progress</div>
          </div>
          <div className="stat-card stat-resolved">
            <div className="stat-value">{stats.resolved}</div>
            <div className="stat-label">Resolved</div>
          </div>
        </div>

        {complaints.length === 0 ? (
          <div className="empty-state">
            <p>You haven't submitted any complaints yet.</p>
            <Button onClick={() => navigate('/submit')}>
              Submit Your First Complaint
            </Button>
          </div>
        ) : (
          <div className="complaints-grid">
            {complaints.map((complaint) => (
              <ComplaintCard key={complaint._id} complaint={complaint} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
