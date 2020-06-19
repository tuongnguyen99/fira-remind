import React, { useState } from 'react';
import Input from '../components/Common/Input';
import { toast } from 'react-toastify';
import Axios from 'axios';
import { API_URL } from '../constants';

const ChangePasswordContainer = ({ history }) => {
  const [formData, setFormData] = useState({
    newpassword: '',
    prenewpassword: '',
  });

  const handleInputChange = ({ target }) => {
    const newState = { ...formData };
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
      console.log(history.location.state.user.id);

      const body = {
        id: history.location.state.user.id,
        oldpassword: history.location.state.user.username,
        newpassword,
      };
      Axios.post(`${API_URL}/changepass`, body)
        .then(({ data }) => {
          const { user, redirectPath } = history.location.state;
          toast.success('Đổi mật khẩu thành công');
          history.replace({
            pathname: redirectPath,
            state: { userId: user.id, username: user.username },
          });
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  return (
    <div
      className='container'
      style={{ height: '90vh', width: '90vw', display: 'flex' }}
    >
      <form className='m-auto' onSubmit={handleSubmit}>
        <h4>Đổi mật khẩu</h4>

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
    </div>
  );
};

export default ChangePasswordContainer;
