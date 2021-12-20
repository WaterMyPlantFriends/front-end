import React from 'react';
import './App.css';
<<<<<<< HEAD
import Signup from './components/Signup'
import Login from './components/Login'
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Profile from './components/Profile'
=======
import Signup from './components/signup'
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
>>>>>>> 8d8b4508b348bb302c1cc0ac3df26a8ac47d059f


function App() {
  return (
    
    <div className="App">
<<<<<<< HEAD
      <h1>Water My Plants</h1>
      <Router>
=======
      <Header />
      <RouteContainer>
>>>>>>> 8d8b4508b348bb302c1cc0ac3df26a8ac47d059f
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/header" component={Header} />
          {/* <Route path="/profile" component={Profile} /> */}
        </Switch>
<<<<<<< HEAD
      </Router>

   
=======
      </RouteContainer>
>>>>>>> 8d8b4508b348bb302c1cc0ac3df26a8ac47d059f
    </div>
  );
}

export default App;
