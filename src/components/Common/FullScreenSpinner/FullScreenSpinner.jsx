import React from 'react';
import './FullScreenSpinner.css';

const FullScreenSpinner = ({ active }) => {
  return active ? (
    <div className='Full-Screen-Spinner'>
      <img src='/img-spinner.svg' alt='spinner' />
    </div>
  ) : null;
};

export default FullScreenSpinner;
