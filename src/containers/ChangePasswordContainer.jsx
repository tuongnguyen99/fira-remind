import React, { useState } from 'react';
import Input from '../components/Common/Input';
import { toast } from 'react-toastify';
import Axios from 'axios';
import { API_URL } from '../constants';
import CardContainer from '../components/Common/CardContainer';
import CardHeader from '../components/Common/CardHeader';

const ChangePasswordContainer = ({ history }) => {
  console.log(history.location.state.user.hasToken);

  const [formData, setFormData] = useState({
    oldPassword: '',
    newpassword: '',
    prenewpassword: '',
  });

  const handleInputChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { oldpassword, newpassword, prenewpassword } = formData;
    if (newpassword.trim().length < 8) {
      toast.error('Mật khẩu phải có độ dài lớn hơn 8 ký tự');
    } else if (newpassword !== prenewpassword) {
      toast.error('Mật khẩu không khớp');
    } else {
      const body = {
        id: history.location.state.user.id,
        oldpassword,
        newpassword,
      };
      Axios.post(`${API_URL}/changepass`, body)
        .then(({ data }) => {
          const { user, redirectPath } = history.location.state;
          toast.success('Đổi mật khẩu thành công');

          if (
            !user.hasToken &&
            user.type !== 'ADMIN' &&
            user.type !== 'INSPECTOR'
          ) {
            history.replace({
              pathname: '/sync',
              state: {
                redirectPath,
                userId: user.id,
                username: user.username,
                email: user.email,
              },
            });
            return;
          }

          history.replace({
            pathname: redirectPath,
            state: {
              userId: user.id,
              username: user.username,
              email: user.email,
            },
          });
        })
        .catch((err) => {
          toast.error(err.response.data.err);
        });
    }
  };

  return (
    <div
      className='container'
      style={{ height: '90vh', width: '100vw', display: 'flex' }}
    >
      <CardContainer style={{ flex: 1, margin: '10%' }}>
        <CardHeader title='Đổi mật khẩu' />
        <form className='m-auto' onSubmit={handleSubmit}>
          <Input
            name='oldpassword'
            value={formData.oldpassword}
            type='password'
            label='Mật khẩu cũ'
            onChange={handleInputChange}
          />
          <Input
            name='newpassword'
            value={formData.newpassword}
            type='password'
            label='Mật khẩu mới'
            onChange={handleInputChange}
          />
          <Input
            name='prenewpassword'
            value={formData.prenewpassword}
            type='password'
            label='Nhập lại mật khẩu'
            onChange={handleInputChange}
          />
          <button type='submit' className='btn btn-primary'>
            Lưu
          </button>
        </form>
      </CardContainer>
    </div>
  );
};

export default ChangePasswordContainer;
