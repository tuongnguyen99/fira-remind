import React, { useState } from 'react';
import Container from '../components/Common/Container';
import ListGroup from '../components/Common/ListGroup';
import { adminListGroupItems } from '../constants';
import { Switch, Route, Redirect } from 'react-router-dom';
import InfoContainer from './InfoContainer';
import UploadFileContainer from './UploadFileContainer';
import Breadcrumb from '../components/Common/Breadcrumb';
import ManageRoom from './ManageRoom';

const AdminContainer = ({ history }) => {
  // lg stand for list group
  const [lgSelected, setLgSelected] = useState({ id: '1' });
  const handleLgItemChange = (item) => {
    setLgSelected(item);
  };

  return (
    <Container type='fluid'>
      <div className='row bg-primary p-3 text-light'>
        <div className='col-md-10'>
          <h2 className='d-inline mr-2'>
            <i className='fas fa-cog my-2'></i>Bảng điều khiển
          </h2>
          <h6 className='d-inline'>Remind FIRA</h6>
        </div>
        <div className='col-md-2 d-flex justify-content-end'>
          <button
            className='btn btn-warning m-0'
            onClick={() => {
              window.location = '/';
            }}
          >
            <i class='fas fa-sign-out-alt mr-2'></i>
            Logout
          </button>
        </div>
      </div>
      <Breadcrumb text='Quản trị viên' />
      <div className='main'>
        <div className='row'>
          <div className='col-md-2 mb-2'>
            <ListGroup
              items={adminListGroupItems}
              selectedItem={lgSelected}
              onChange={handleLgItemChange}
            />
          </div>
          <div className='col'>
            <Switch>
              <Route path='/admin/info' component={InfoContainer} />
              <Route path='/admin/room' component={ManageRoom} />
              <Route path='/admin/file' component={UploadFileContainer} />
              <Redirect to='/admin/info' />
            </Switch>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AdminContainer;
