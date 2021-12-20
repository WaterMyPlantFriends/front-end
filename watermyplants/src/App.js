import React from 'react';
import './App.css';
import Signup from './components/Signup'
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'


function App() {
  return (
    
    <div className="App">
      <Header />
      {/* <RouteContainer>
        <Switch>
          <Route exact path="/" />
          <Route exact path from="/signup" component={Signup} />
          <PrivateRoute path="/" />
        </Switch>
      </RouteContainer> */}
    </div>
  );
}

export default App;
