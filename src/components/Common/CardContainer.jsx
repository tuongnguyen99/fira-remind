import React from 'react';

const CardContainer = ({ children, ...rest }) => {
  return (
    <div className='card' {...rest}>
      {children}
    </div>
  );
};

export default CardContainer;
