import React from 'react';
import './App.css';
import Signup from './components/Signup'
import Login from './components/login'
import Header from './components/Header'
import {BroswerRouter as Router, Switch, Redirect} from 'react-router-dom'


function App() {
  return (
    
    <div className="App">
      <h1>Water My Plants</h1>
      <RouteContainer>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path from="/signup" component={Signup} />
          <PrivateRoute path="/header" component={Header} />
          <PrivateRoute path="/profile" component={Profile} />

        </Switch>
      </RouteContainer>

   
    </div>
  );
}

export default App;
