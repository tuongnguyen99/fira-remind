import React from 'react';
import Container from '../components/Common/Container';

const NotFoundContainer = () => {
  return (
    <div>
      <Container>
        <h4 className='text-center mt-2 animate__hinge animate__animated animate__delay-2s'>
          Không tìm thấy trang này
        </h4>
        <div className='row h-80'>
          <img
            className='img-fluid m-auto'
            width='400'
            src='/img-404.svg'
            alt=''
          />
        </div>
      </Container>
    </div>
  );
};

export default NotFoundContainer;
