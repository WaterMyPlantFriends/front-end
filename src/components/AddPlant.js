import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axiosWithAuth from "../utilities/axiosWithAuth";
// import axios from 'axios'
import axiosWithAuth from "../utilities/axiosWithAuth";

const AddPlant = () => {
  const [nickname, setNickname] = useState("");
  const [species, setSpecies] = useState("");
  const [h2oFrequency, seth2oFrequency] = useState(null);
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "nickname") {
      setNickname(e.target.value);
    } else if (e.target.name === "species") {
      setSpecies(e.target.value);
    } else if (e.target.name === "h2oFrequency") {
      seth2oFrequency(e.target.value);
    } else if (e.target.name === "image") {
      setImage(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/users/1/plants", {
        nickname: nickname,
        species: species,
        h2oFrequency: h2oFrequency,
        image: image,
        user_id: 1,
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // useEffect (() => {
  //   console.log('nickname', nickname)
  //   console.log('water', h2oFrequency)
  //   console.log('species', species)
  //   console.log('image', image)

  // },[nickname, species, h2oFrequency, image])

  return (
    <div className='profile-card'>
      <h1>Add Plant</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Plant Info:
          <div>
            <input
              id="user_id"
              text="text"
              name="nickname"
              value={nickname}
              onChange={handleChange}
              placeholder="nickname"
            />
          </div>
          <div>
            <input
              text="text"
              name="species"
              value={species}
              onChange={handleChange}
              placeholder="Species"
            />
          </div>
          <div>
            <input
              text="text"
              name="h2oFrequency"
              value={h2oFrequency}
              onChange={handleChange}
              placeholder="Water Frequency"
            />
          </div>
          <div>
            <input
              text="text"
              name="image"
              value={image}
              onChange={handleChange}
              placeholder="Image (Optional)"
            />
          </div>
        </label>
        <button> Add </button>
      </form>
    </div>
  );
};

export default AddPlant;
