import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import LoginPageContainer from '../../containers/LoginContainer';
import UploadFileContainer from '../../containers/UploadFileContainer';
import AdminContainer from '../../containers/AdminContainer';
import InspectorContainer from '../../containers/InspectorContainer';
import CalendarSyncContainer from '../../containers/CalendarSyncContainer';
import StudentContainer from '../../containers/StudentContainer';
import TeacherContainer from '../../containers/TeacherContainer';
import NotFoundContainer from '../../containers/NotFoundContainer';
import ChangePasswordContainer from '../../containers/ChangePasswordContainer';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route path='/upload' component={UploadFileContainer} />
        <Route path='/sync' component={CalendarSyncContainer} />
        <Route path='/password' component={ChangePasswordContainer} />
        <Route path='/student' component={StudentContainer} />
        <Route path='/teacher' component={TeacherContainer} />
        <Route path='/inspect' component={InspectorContainer} />
        <Route path='/admin' component={AdminContainer} />
        <Route path='/not-found' component={NotFoundContainer} />
        <Route exact path='/' component={LoginPageContainer} />
        <Redirect to='/not-found' />
      </Switch>
    </div>
  );
}

export default App;
