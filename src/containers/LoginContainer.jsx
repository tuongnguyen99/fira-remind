import React from 'react';
import Input from '../components/Common/Input';

const LoginPage = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 my-auto'>
          <img src='./img-login.gif' alt='login illustration' />
        </div>
        <div className='col-md-6'>
          <form action=''>
            <Input name='username' label='Username' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
