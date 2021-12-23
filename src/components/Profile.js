import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import axiosWithAuth from "../utilities/axiosWithAuth";
import { connect } from "react-redux";
import { addPlant } from "../actions/plantActions";
import AddPlant from "./AddPlant";
import { BASE_URL } from "../constants";

const Profile = (props) => {
  const [user, setUser] = useState(null);
  const [plants, setPlants] = useState(null);

  // User ID should be dynamic and be assigned to whoever is logged in
  let user_id = 1;
  useEffect(() => {
    axios
      .get(`${BASE_URL}/users/${user_id}`)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${user_id}/plants`)
      .then((response) => {
        setPlants(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!user) {
    return <h1>Loading</h1>;
  }

  const handleAddPlantStart = (e) => {
    e.preventDefault();
    props.addPlant();
    return;
  };

  if (props.addingPlant === false) {
    return (
      <StyledProfile>
        <div className="profile-card">
          <div className="title-container">
            <h1>Profile</h1>
            <h3>ID: {user.user_id}</h3>
            <h4>Username: {user.username}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Phone: {user.phone}</h4>
            {plants &&
              plants.map((plant) => (
                <div key={plant.plant_id} className="plants">
                  <h5>{plant.nickname}</h5>
                </div>
              ))}
            <div className="button-container">
              <Link to="/profile">
                <button id="profile">EDIT PROFILE</button>
              </Link>
            </div>
            <div>
              <button id="addplant" onClick={handleAddPlantStart}>
                ADD PLANT
              </button>
            </div>
          </div>
        </div>
      </StyledProfile>
    );
  } else {
    return (
      <div>
        <StyledProfile>
          <div className="profile-card">
            <div className="title-container">
              <h1>Profile</h1>
              <h3>ID: {user.user_id}</h3>
              <h4>Username: {user.username}</h4>
              <h4>Email: {user.email}</h4>
              <h4>Phone: {user.phone}</h4>
              {plants &&
                plants.map((plant) => (
                  <div key={plant.plant_id} className="plants">
                    <h5>{plant.nickname}</h5>
                  </div>
                ))}
              <div className="button-container">
                <Link to="/profile">
                  <button id="profile">EDIT PROFILE</button>
                </Link>
              </div>
            </div>
          </div>
        </StyledProfile>
        <StyledProfile>
          <AddPlant />
        </StyledProfile>
      </div>
    );
  }
};
const mapStateToProps = (state) => ({addingPlant: state.plantReducer.addingPlant})
export default connect(mapStateToProps, { addPlant })(Profile);

const StyledProfile = styled.div`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #28223f;
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
  .profile-card {
    margin-top: 75px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgb(24, 191, 85);
    border-radius: 5px;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
    width: 350px;
    max-width: 100%;
    text-align: center;
  }
  .title-container {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .button-container {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  button {
    background-color: #fff;
    color: #000;
    border: 1px solid #fff;
    border-radius: 3px;
    height: 2em;
    padding-left: 24px;
    padding-right: 24px;
  }
  button:hover {
    background-color: #000;
    border: 1px solid #000;
    color: white;
  }
`;
