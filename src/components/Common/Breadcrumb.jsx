import React from 'react';

const Breadcrumb = ({ text }) => {
  return (
    <nav className='breadcrumb my-2'>
      <span className='breadcrumb-item active'>{text}</span>
    </nav>
  );
};

export default Breadcrumb;
