import React from 'react'
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";

export default function Header() {

    const header = document.querySelector('div');
    const headerContainer = document.createElement('div');
    const titleContainer = document.createElement('div');
    const headerTitle = document.createElement('h1')
    const headerNav = document.createElement('nav');
    const homeLink = document.createElement('a');
    const loginLink = document.createElement('a');
    const signupLink = document.createElement('a');
    const profileLink = document.createElement('a')
    
    header.classList.add('header')
    headerContainer.classList.add('header-container')
    titleContainer.classList.add('title-container')









    return (
        <div className='header'>
            <div className='header-container'>
                <div className='title-container'>
                    <h1 className='site-title'>WATER MY PLANTS</h1>
                </div>
                <nav>
                    <button id='home'>HOME</button>
                    <button id='login'>LOGIN</button>
                    <button id='signup'>SIGN UP</button>
                    <button id='profile'>PROFILE</button>
                </nav>
            </div>
        </div>
    )
}