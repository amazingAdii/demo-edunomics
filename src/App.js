import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/common/NavBar';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';

function App() {
  return (
    <div className='App' style={{ backgroundColor: '#eee' }}>
      <Router>
        <NavBar />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/register' component={RegisterPage} />
      </Router>
    </div>
  );
}

export default App;
