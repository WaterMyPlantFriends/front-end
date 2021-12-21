import React, {useState, useEffect}from 'react';
import styled from 'styled-components'
import axios from 'axios';
import '../Styles/Profile.css'

const StyledProfile = styled.div`
    * {
    box-sizing: border-box;
    }
    body {
        background-color: #28223f;
        font-family: Montserrat, sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;

        min-height: 100vh;
        margin: 0;
    }
    h3 {
        margin: 10px 0;
    }
    h6 {
        margin: 5px 0;
        text-transform: uppercase;
    }
    p {
        font-size: 14px;
        line-height: 21px;
    }
    .card-container {
        background-color: #231e39;
        border-radius: 5px;
        box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
        color: #b3b8cd;
        padding-top: 30px;
        position: relative;
        width: 350px;
        max-width: 100%;
        text-align: center;
    }
    .card-container .round {
        border: 1px solid #03bfcb;
        border-radius: 50%;
        padding: 7px;
    }
`
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
        <StyledProfile>
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
        </StyledProfile>
    )

}