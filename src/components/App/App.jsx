import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import LoginPageContainer from '../../containers/LoginContainer';
import UploadFileContainer from '../../containers/UploadFileContainer';
import AdminContainer from '../../containers/AdminContainer';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route path='/upload' component={UploadFileContainer} />
        {/* <Redirect path='/admin' to='/admin/info' /> */}
        <Route path='/admin' component={AdminContainer} />
        <Route path='/' component={LoginPageContainer} />
      </Switch>
    </div>
  );
}

export default App;
