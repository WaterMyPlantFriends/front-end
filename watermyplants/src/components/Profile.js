import React, {useState, useEffect}from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios';

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
export default function Profile(props) {
    const [user, setUser] = useState();
    const [plants, setPlants] = useState();
    const {user_id} = useParams()
    // WIP get specific logged in user to render their profile
    useEffect (() => {
        axios.get(`https://watermyplantz.herokuapp.com/api/users/${user_id}`)
        .then(response => {
        setUser(response.data)
        console.log(response.data)
        })
        .catch(error => {
        console.error(error)
        })
        .finally(() => console.log("WOOOOOHOOOO I WORK!"))
    })
    // WIP get user's plants and render to list
    useEffect(() => {
        axios.get(`https://watermyplantz.herokuapp.com/api/users/${user_id}/plants`)
            .then(response => {
                console.log(response.data)
                setPlants(response.data)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    if (!Profile) {
        return <div>Loading profile information...</div>;
        }

        const { name, username, email, userPlants} = Profile;

    return (
        <StyledProfile>
            <div className='profile-card'>
                <div className='title-container'>
                    <h3>{name}</h3>
                    <h6>{username}</h6>
                    <h6>{email}</h6>
                {plants.map(plant => (
                    <div key={plant} className="plants">
                        {plant}
                    </div>
                ))}
                </div>
            </div>
        </StyledProfile>
    )

}