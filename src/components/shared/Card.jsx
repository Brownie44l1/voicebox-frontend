import React from 'react';

const Card = ({ 
  children, 
  interactive = false, 
  onClick,
  className = '',
  ...props 
}) => {
  const baseClass = 'card';
  const interactiveClass = interactive ? 'card-interactive' : '';
  
  const classes = [baseClass, interactiveClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
