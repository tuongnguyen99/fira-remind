import React from 'react';
import './TableContainer.css';

const TableContainer = ({ children, ...rest }) => {
  return (
    <div className='table-responsive table-scroll:' {...rest}>
      {children}
    </div>
  );
};

export default TableContainer;
