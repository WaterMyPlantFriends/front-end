import React from 'react'
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
import '../Styles/Header.css'
export default function Header() {

    return (
        <div className='header'>
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
        </div>
    )
}