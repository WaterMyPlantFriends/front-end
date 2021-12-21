import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState({});
  const uid = localStorage.getItem("uid");
  const [plants, setPlants] = useState();
  // WIP get specific logged in user to render their profile

  let user_id = 0; // delete
  useEffect(() => {
    axios
      .get(`https://watermyplantz.herokuapp.com/api/users/${user_id}`)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`https://watermyplantz.herokuapp.com/api/users/${user_id}/plants`)
      .then((response) => {
        console.log(response.data);
        setPlants(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <StyledProfile>
      <div className="profile-card">
        <div className="title-container">
          <p>ID: {user.user_id}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          {plants.map((plant) => (
            <div key={plant} className="plants">
              {plant}
            </div>
          ))}
        </div>
      </div>
    </StyledProfile>
  );
}

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
`;
