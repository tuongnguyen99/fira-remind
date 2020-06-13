import React, { useState } from 'react';
import Input from '../components/Common/Input';
import Select from '../components/Common/Select';
import { loginType as lt, loginType } from '../constants';
import { toast } from 'react-toastify';

const LoginPage = ({ history }) => {
  const [loginTypeId, setLoginTypeId] = useState({ loginTypeId: '1' });
  const loginIdSet = new Set(['1', '3', '4']);

  const handleInputChange = (e) => {
    const el = e.target;
    const loginTypeId = el.options[el.selectedIndex].dataset.id;
    setLoginTypeId({ loginTypeId });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // toast.success('Xin chào ...');
    console.log(loginTypeId.loginTypeId);

    switch (loginTypeId.loginTypeId) {
      case '1':
        history.push('/teacher');
        break;
      case '2':
        history.push('/student');
        break;
      case '3':
        history.push('/inspect');
        break;
      case '4':
        history.push('/admin');
        break;
      default:
        history.push('/not-found');
        break;
    }
  };

  return (
    <div className='container'>
      <div className='row h-80'>
        <div className='col-md-6 my-auto'>
          <img
            className='img-fluid'
            src='./img-login.gif'
            alt='login illustration'
          />
        </div>
        <div className='col-md-6 m-auto'>
          <h2 className='mb-4'>Đăng nhập</h2>
          <form onSubmit={handleLogin}>
            <Select
              name='loginType'
              label='Đối tượng'
              items={lt}
              onChange={handleInputChange}
            />

            <Input
              name='username'
              label='Tài khoản'
              onChange={handleInputChange}
            />
            {console.log(loginTypeId.loginTypeId)}
            {console.log(loginIdSet.has(loginTypeId.loginTypeId))}
            {loginIdSet.has(loginTypeId.loginTypeId) && (
              <Input
                name='username'
                label='Mật khẩu'
                onChange={handleInputChange}
              />
            )}
            <button type='submit' className='btn btn-primary'>
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
