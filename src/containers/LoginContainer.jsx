import React, { useState } from 'react';
import Input from '../components/Common/Input';
import Select from '../components/Common/Select';
import { loginType as lt, API_URL } from '../constants';
import { toast } from 'react-toastify';
import axios from 'axios';
import FullScreenSpinner from '../components/Common/FullScreenSpinner/FullScreenSpinner';

const LoginPage = ({ history }) => {
  const [loginType, setLoginType] = useState(lt[0]);
  const [account, setAccount] = useState({ username: '', password: '' });
  const [isloading, setIsLoading] = useState(false);

  const handleLoginTypeChange = ({ target }) => {
    const index = target.options[target.selectedIndex].dataset.id - 1;
    console.log(loginType);
    setLoginType(lt[index]);
  };

  const handleAccountChange = ({ target }) => {
    setAccount({ ...account, [target.name]: target.value });
  };

  const login = () => {
    console.log(account);
    const apiEndPoint = `http://localhost:4000/user/login`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    axios
      .post(apiEndPoint, { ...account, type: loginType.nameInDb }, config)
      .then(({ data }) => {
        setIsLoading(false);
        console.log(data);

        if (loginType.nameInDb === data.type) {
          data.hasToken
            ? history.push({
                pathname: loginType.href,
                state: { userId: data.id, username: data.username },
              })
            : history.push({
                pathname: '/sync',
                state: { userId: data.id, redirectPath: loginType.href },
              });
        } else {
          toast.warning('Sai Tài khoản hoặc mật khẩu');
        }
      })
      .catch(({ response }) => {
        setIsLoading(false);
        if (response.status === 404) {
          toast.error('Sai tài khoản hoặc mật khẩu');
          console.log(response);
        }
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    login();
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
            {loginType.id !== '2' && (
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
      <FullScreenSpinner active={isloading} />
    </div>
  );
};

export default LoginPage;
