import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Header from './components/Header';
import axios from 'axios';
import Dashboard from './components/Dashboard';
import { createBrowserHistory } from "history";

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Profile from './components/Profile'


function App() {
  const history = createBrowserHistory({ forceRefresh: true });

  async function handleLoginSubmit(postLogin) {
    axios
      .post(
        "https://watermyplantz.herokuapp.com/api/auth/login",
        postLogin
      )
      .then((res) => {
        console.log("login response:", res);
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("userId", res.data.user_id);
        history.push("/plants");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login">
            <Login onSubmit={handleLoginSubmit} />
          </Route>
          <Route path="/signup" component={SignUp} />
          {/* <Route path="/profile" component={Profile} /> */}
          <Route path="/plants">
            <Dashboard 

            />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;