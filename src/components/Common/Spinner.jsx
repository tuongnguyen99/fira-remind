import React from 'react';

const Spinner = () => {
  return (
    <div className='text-center' style={{ padding: 20 }}>
      <i
        className='fa fa-poop fa-6x fa-spin '
        aria-hidden='true'
        style={{ color: '#795548' }}
      ></i>
      {/* <img class='fa-spin' src='/f-logo.svg' width='100' height='100' alt='' /> */}
    </div>
  );
};

export default Spinner;
