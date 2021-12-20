import React from 'react';
import './App.css';
import Signup from './components/Signup'
import {BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'


function App() {
  return (
    
    <div className="App">
      <h1>Water My Plants</h1>
      <RouteContainer>
        <Switch>
          <Route exact path="/" />
          <Route exact path from="/signup" component={Signup} />
          <PrivateRoute path="/" />
        </Switch>
      </RouteContainer>

   
    </div>
  );
}

export default App;
