import React from 'react';
<<<<<<< HEAD
=======


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
>>>>>>> 8d8b4508b348bb302c1cc0ac3df26a8ac47d059f
