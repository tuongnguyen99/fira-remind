import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import LoginPageContainer from '../../containers/LoginContainer';
import UploadFileContainer from '../../containers/UploadFileContainer';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route path='/upload' component={UploadFileContainer} />
        <Route path='/' component={LoginPageContainer} />
      </Switch>
    </div>
  );
}

export default App;
