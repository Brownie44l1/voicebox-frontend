import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../shared/Card';
import StatusBadge from './StatusBadge';

const ComplaintCard = ({ complaint, adminView = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const path = adminView 
      ? `/admin/complaint/${complaint._id}`
      : `/complaint/${complaint._id}`;
    navigate(path);
  };

  return (
    <Card interactive onClick={handleClick}>
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', margin: 0 }}>
            {complaint.title}
          </h3>
          <StatusBadge status={complaint.status} />
        </div>
        <p style={{ 
          color: 'rgb(var(--text-secondary))', 
          fontSize: '0.875rem',
          margin: '0.5rem 0',
          lineHeight: '1.5'
        }}>
          {complaint.description.substring(0, 150)}
          {complaint.description.length > 150 && '...'}
        </p>
      </div>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        gap: '0.75rem', 
        alignItems: 'center',
        fontSize: '0.875rem',
        color: 'rgb(var(--text-tertiary))'
      }}>
        <span>📁 {complaint.category}</span>
        <StatusBadge status={complaint.priority} type="priority" />
        <span>📅 {new Date(complaint.submittedAt).toLocaleDateString()}</span>
        {adminView && (
          <span>
            👤 {complaint.isAnonymous ? 'Anonymous' : complaint.submittedBy?.name || 'N/A'}
          </span>
        )}
      </div>
    </Card>
  );
};

export default ComplaintCard;
