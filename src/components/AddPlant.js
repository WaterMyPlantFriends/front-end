import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axiosWithAuth from "../utilities/axiosWithAuth";

const plantTemplate = {
  nickname: "",
  species: "",
  h2o_frequency: "",
  uploaded_image: "",
  user_id: 1
}

const AddPlant = () => {
  const [newPlant, setNewPlant] = useState(plantTemplate);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNewPlant({ ...newPlant, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/plants", newPlant)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
              value={newPlant.nickname}
              onChange={handleChange}
              placeholder="Nickname"
            />
          </div>
          <div>
            <input
              text="text"
              name="species"
              value={newPlant.species}
              onChange={handleChange}
              placeholder="Species"
            />
          </div>
          <div>
            <input
              text="text"
              name="h2o_frequency"
              value={newPlant.h2o_frequency}
              onChange={handleChange}
              placeholder="Water Frequency"
            />
          </div>
          <div>
            {/* <form> */}
              <input
                text="file"
                accept="image/*"
                name="uploaded_image"
                value={newPlant.uploaded_image}
                onChange={handleChange}
              />
              {/* <button>Add photo</button> */}
            {/* </form> */}
          </div>
        </label>
        <button> Add </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({ plants: state.plants })
export default connect(mapStateToProps)(AddPlant);
