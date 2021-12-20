import React from 'react';


export default function Profile({ details }) {

    if (!details) {
        return <h3>Working to fetch your profile details...</h3>
    }
    
    return (
        <div className='user container'>
        <p>{details.username}</p>
        </div>
        )
}