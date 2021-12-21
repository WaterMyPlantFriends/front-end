import React from 'react';
import styled from 'styled-components';
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import Profile from './components/Profile'

const StyledHeader = styled.div`
    .header-container {
    width: 90%;
    margin: auto;
    min-height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: .8rem;
    }
    .title-container {
        display: flex;
    }
    nav {
        padding-right: 15px;
    }
    a{
        padding: 2px;
    }
    button { 
        background-color: #000;
        color: #ffffff;
        border: 1px solid rgb(0, 0, 0);
        border-radius: 3px;
        height: 2em;
        padding-left: 24px;
        padding-right: 24px;
    }
    button:hover {
        background-color: rgb(24, 191, 85);
        border: 1px solid rgb(24, 191, 85);
        color: white;
    }
`

function App() {
  return (
    
    <div className="App">
      <StyledHeader>
            <div className='header-container'>
                <div className='title-container'>
                    <h1 className='title'>WATER MY PLANTS</h1>
                </div>
                <nav>
                    <Router>
                        <Route exact path='/' />
                        <Link to="/"><button id='home'>HOME</button></Link>
                        <Route exact path='/Login' />
                        <Link to="/"><button id='login'>LOGIN</button></Link>
                        <Route exact path='/Signup' />
                        <Link to="/"><button id='signup'>SIGN UP</button></Link>
                        <Route exact path='/Profile' />
                        <Link to="/"><button id='profile'>PROFILE</button></Link>
                    </Router>
                </nav>
            </div>
        </StyledHeader>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={SignUp} />
          {/* <Route path="/profile" component={Profile} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;