import React from 'react'
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";

export default function Header() {
    
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='title-container'>
                    <h1 className='title-1'>WATER MY PLANTS</h1>
                </div>
                <Router>
                <nav>
                    <Route exact path='/' />
                    <Link to="/"><button id='home'>HOME</button></Link>
                    <Route exact path='/' />
                    <Link to="/"><button id='login'>LOGIN</button></Link>
                    <Route exact path='/' />
                    <Link to="/"><button id='signup'>SIGN UP</button></Link>
                    <Route exact path='/' />
                    <Link to="/"><button id='profile'>PROFILE</button></Link>
                </nav>
                </Router>
            </div>
        </div>
    )
}