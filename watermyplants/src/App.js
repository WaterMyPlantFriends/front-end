import React from 'react';
import './App.css';
import Signup from './components/Signup'
import Login from './components/login'
import Header from './components/Header'
import {BrowserRouter as Route, Switch } from 'react-router-dom'
// import Profile from './components/Profile'


function App() {
  return (
    
    <div className="App">
      <h1>Water My Plants</h1>
      <Route>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path from="/signup" component={Signup} />
          <Route path="/header" component={Header} />
          {/* <Route path="/profile" component={Profile} /> */}

        </Switch>
      </Route>

   
    </div>
  );
}

export default App;
