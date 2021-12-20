import React from 'react';
import './App.css';
import Signup from './components/Signup'
import Login from './components/Login'
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Profile from './components/Profile'


function App() {
  return (
    
    <div className="App">
      <h1>Water My Plants</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/header" component={Header} />
          {/* <Route path="/profile" component={Profile} /> */}
        </Switch>
      </Router>

   
    </div>
  );
}

export default App;
