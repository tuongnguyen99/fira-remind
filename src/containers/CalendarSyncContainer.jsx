import React from 'react';
import Container from '../components/Common/Container';
import GoogleLogin from 'react-google-login';
import { toast } from 'react-toastify';
import Axios from 'axios';
import { API_URL } from '../constants';

const qs = require('qs');
const axios = require('axios').default;

const CalendarSyncContainer = ({ history }) => {
  const responseGoogle = (response) => {
    if (!response.code) {
      // console.log(response);
      if (response.error) {
        toast.error(response.error);
        return;
      }
      toast('Tu dong dang nhap');
      history.push('/student');
    }

    const reqBody = {
      code: response.code + '&',
      client_id:
        '1057343402460-o2ictf4po05c7o3gbb9ssm1r026o8h9n.apps.googleusercontent.com',
      client_secret: 'XPynDhUOGVXdf8fEP1-dq7l0',
      redirect_uri: 'http://localhost:3000',
      scope: 'https://www.googleapis.com/auth/calendar',
      grant_type: 'authorization_code',
    };

    axios({
      method: 'POST',
      url: 'https://oauth2.googleapis.com/token',
      data: qs.stringify(reqBody),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    })
      .then(({ data }) => {
        const accessToken = data.access_token;
        const refreshToken = data.refresh_token;
        const expiryDate = data.expires_in;
        data = {
          id: history.location.state.userId,
          access_token: accessToken,
          refresh_token: refreshToken,
          expiry_date: expiryDate,
        };

        const { redirectPath, email, username } = history.location.state;
        Axios.post(`${API_URL}/user/settoken`, data)
          .then(({}) => {
            history.push({
              pathname: redirectPath,
              state: {
                userId: data.id,
                username: username,
                email,
              },
            });
          })
          .catch((err) => {
            toast.error(err.response.data.err);
          });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <div className='Calendar-Sync'>
      <Container>
        <div className='row h-80'>
          <div className='col-md-6 m-auto'>
            <h2 className='mb-4 animate__animated animate__fadeInLeft'>
              Đồng bộ Google calendar
            </h2>
            <p className='animate__animated animate__fadeInRight'>
              Dễ dàng quản lý lịch biểu với Google calendar Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Cupiditate nesciunt
              quibusdam expedita. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Illum nostrum rerum hic officia repellat.
            </p>
            <div className='animate__animated animate__fadeInUp'>
              <GoogleLogin
                className='signInButton'
                clientId='1057343402460-o2ictf4po05c7o3gbb9ssm1r026o8h9n.apps.googleusercontent.com'
                buttonText='Đồng bộ lịch Google'
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                scope='profile email https://www.googleapis.com/auth/calendar'
                cookiePolicy={'single_host_origin'}
                accessType='offline'
                responseType='code'
                prompt='consent'
                // isSignedIn={true}
              />
            </div>
          </div>
          <div className='col-md-6 my-auto'>
            <img
              className='img-fluid animate__animated animate__fadeInRight animate__fast'
              src='./img-calendar.jpg'
              alt='login illustration'
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CalendarSyncContainer;
