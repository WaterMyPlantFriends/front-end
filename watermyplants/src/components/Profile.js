import { useState, useEffect } from 'react';
import axios from 'axios';

import './PlantList.css';

const Profile = () => {
    const [user, setUser] = useState({});
    const uid = localStorage.getItem('uid');

    useEffect(() => {
        axios.get(`https://watermyplantz.herokuapp.com/api/users/${user_id}`)
        .then(res => {
            setUser(res.data);
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    return(
        <div className='plant column'>
            <p>ID: {user.user_id}</p>
            <p>Username: {user.username}</p>
            <p>Phone: {user.phone}</p>
        </div>
    )
}

export default Profile;