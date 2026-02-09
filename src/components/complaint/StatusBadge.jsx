import React from 'react';

const StatusBadge = ({ status, type = 'status' }) => {
  const getStatusClass = () => {
    const normalized = status.toLowerCase().replace(/\s+/g, '-');
    return `${type}-${normalized}`;
  };

  return (
    <span className={`badge ${getStatusClass()}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
