import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
