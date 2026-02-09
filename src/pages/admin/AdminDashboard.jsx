import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import ComplaintCard from '../../components/complaint/ComplaintCard';
import Loading from '../../components/shared/Loading';
import './AdminPages.css';

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [stats, setStats] = useState(null);
  const [filter, setFilter] = useState({ status: '', category: '', priority: '' });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [filter]);

  const fetchData = async () => {
    try {
      const params = new URLSearchParams();
      if (filter.status) params.append('status', filter.status);
      if (filter.category) params.append('category', filter.category);
      if (filter.priority) params.append('priority', filter.priority);

      const [complaintsRes, analyticsRes] = await Promise.all([
        api.get(`/complaints?${params}`),
        api.get('/admin/analytics')
      ]);

      setComplaints(complaintsRes.data.data.complaints);
      setStats(analyticsRes.data.data.stats);
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
        </div>

        {stats && (
          <div className="stats-grid admin-stats">
            <div className="stat-card">
              <div className="stat-value">{stats.total}</div>
              <div className="stat-label">Total Complaints</div>
            </div>
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
        )}

        <div className="filters">
          <select value={filter.status} onChange={(e) => setFilter({...filter, status: e.target.value})}>
            <option value="">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
            <option value="Closed">Closed</option>
          </select>

          <select value={filter.category} onChange={(e) => setFilter({...filter, category: e.target.value})}>
            <option value="">All Categories</option>
            <option value="Academic">Academic</option>
            <option value="Facilities">Facilities</option>
            <option value="Student Services">Student Services</option>
            <option value="Harassment">Harassment</option>
            <option value="Technical">Technical</option>
            <option value="Other">Other</option>
          </select>

          <select value={filter.priority} onChange={(e) => setFilter({...filter, priority: e.target.value})}>
            <option value="">All Priorities</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </div>

        {complaints.length === 0 ? (
          <div className="empty-state">No complaints found with the selected filters.</div>
        ) : (
          <div className="complaints-grid">
            {complaints.map((complaint) => (
              <ComplaintCard key={complaint._id} complaint={complaint} adminView />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
