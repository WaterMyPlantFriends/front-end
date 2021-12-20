import React from 'react'
import '../Styles/Header.css'
export default function Header() {

    return (
        <div className='header'>
            <div className='header-container'>
                <div className='title-container'>
                    <h1 className='title'>WATER MY PLANTS</h1>
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