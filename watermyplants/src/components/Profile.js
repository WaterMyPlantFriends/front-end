import React, {useState, useEffect}from 'react';
import axios from 'axios';
import '../Styles/Profile.css'


export default function Profile() {

    const [user, setuser] = useState();

    const [plants, setplants] = useState();
    // WIP get specific logged in user to render their profile
    useEffect (() => {
        axios.get(`https://watermyplantz.herokuapp.com/api/users/${user_id}`)
        .then(response => {
        userCard.appendChild(profileCardMaker(response.data))
        console.log(response.data)
        })
        .catch(error => {
        console.error(error)
        })
        .finally(() => console.log("WOOOOOHOOOO I WORK!"))
    })
    // WIP get user's plants and render to list
    useEffect (() =>{
        
        plants.forEach(Plant =>{
            axios.get(`https://watermyplantz.herokuapp.com/api/plants`)
            .then(res => {
            document.querySelector('.cards').append(profileCardMaker(response.data))}
            )
        })
    })

    return (
        <div className='profile-container'>
            <div className='profile-card'>
                <div className='title-container'>
                    <img
                        class="round"
                        src={response.data.img}
                        alt="user"
                    />
                    <h3>{data.name}</h3>
                    <h6>{data.username}</h6>
                <div class="plants">
                    {
                        !!data.plants && !!data.plants.length &&
                        <div>
                            <h6>Plants:</h6>
                            <ul>
                            {data.plants.map((plant, idx) => <li key={idx}>{plant}</li>)}    
                            </ul> 
                        </div>       
                }
                        </div>
                </div>
            </div>
        </div>
    )

}