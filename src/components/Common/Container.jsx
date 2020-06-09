import React from 'react';

const Container = ({ type = 'container', className = '', children }) => {
  return (
    <div className={`${type === 'fluid' ? 'container-fluid ' : 'container '} ${className}`}>
      {
        children
      }
    </div>
  );
};

export default Container;