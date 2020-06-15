import React, { useState } from 'react';
import Input from '../components/Common/Input';
import Select from '../components/Common/Select';
import { loginType as lt, API_URL } from '../constants';
import { toast } from 'react-toastify';
import axios from 'axios';

const LoginPage = ({ history }) => {
  const [loginType, setLoginType] = useState(lt[0]);
  const [account, setAccount] = useState({ username: '', password: '' });

  const handleLoginTypeChange = ({ target }) => {
    const index = target.options[target.selectedIndex].dataset.id - 1;
    console.log(loginType);
    setLoginType(lt[index]);
  };

  const handleAccountChange = ({ target }) => {
    setAccount({ ...account, [target.name]: target.value });
  };

  const login = () => {
    const apiEndPoint = `${API_URL}/user/login`;
    axios
      .post(apiEndPoint, account)
      .then(({ data }) => {
        if (loginType.nameInDb === data.type) {
          history.push(loginType.href);
        } else {
          toast.warning('Sai Tài khoản hoặc mật khẩu');
        }
      })
      .catch(({ response }) => {
        if (response.status === 404) {
          toast.error('Sai tài khoản hoặc mật khẩu');
        }
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login();

    // switch (loginTypeId.loginTypeId) {
    //   case '1':
    //     history.push('/teacher');
    //     break;
    //   case '2':
    //     history.push('/student');
    //     break;
    //   case '3':
    //     history.push('/inspect');
    //     break;
    //   case '4':
    //     history.push('/admin');
    //     break;
    //   default:
    //     history.push('/not-found');
    //     break;
    // }
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
              onChange={handleLoginTypeChange}
            />

            <Input
              name='username'
              label='Tài khoản'
              value={account.username}
              onChange={handleAccountChange}
            />
            {true && (
              <Input
                name='password'
                label='Mật khẩu'
                value={account.password}
                onChange={handleAccountChange}
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
