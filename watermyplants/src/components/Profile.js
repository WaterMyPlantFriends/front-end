import React from 'react';
import axios from 'axios';
import '../Styles/Profile.css'


export default function Profile {
    // get specific logged in user to render their profile
    function getUser (userName){
        axios.get(`api call to ${userName}`)
        .then(response => {
        userCard.appendChild(profileCardMaker(response.data))
        console.log(response.data)
        })
        .catch(error => {
        console.error(error)
        })
        .finally(() => console.log("WOOOOOHOOOO I WORK!"))
    }
    // get list of user plants and render to list
    function getPlants (plants){
        plants.forEach(Plant =>{
            axios.get(`url for users plants input`)
            .then(res => {
            document.querySelector('.cards').append(profileCardMaker(response.data))}
            )
        })
    }

    return (
        <div className='profile-container'>
            <div className='profile-card'>
                <div className='title-container'>
                    <img
                        class="round"
                        src={details.img}
                        alt="user"
                    />
                    <h3>{details.name}</h3>
                    <h6>{details.username}</h6>
                <div class="plants">
                    {
                        !!details.plants && !!details.plants.length &&
                        <div>
                            <h6>Plants:</h6>
                            <ul>
                            {details.plants.map((plant, idx) => <li key={idx}>{plant}</li>)}    
                            </ul> 
                        </div>       
                }
                        </div>
                </div>
            </div>
        </div>
    )

}