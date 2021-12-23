import React, { useEffect } from "react";
import styled from "styled-components";
import Plant from "./Plant";
import { connect } from "react-redux";
import { getPlants } from "../actions/plantActions";

const PlantDisplay = (props) => {
  useEffect(() => {
    props.getPlants();
  }, []);

  if (!props.plants) return <h3>Please login.</h3>;
  return (
    <StyledDiv className="plantDisplay container">
      {props.plants
        .filter((p) => p.user_id === null)
        .map((plant) => {
          return (
            <Plant
              id={plant.plant_id}
              nickname={plant.nickname}
              species={plant.species}
              h2oFrequency={plant.h2o_frequency}
              image={plant.image_url}
            />
          );
        })}
    </StyledDiv>
  );
};
const mapStateToProps = (state) => ({ plants: state.plantReducer.plants });
export default connect(mapStateToProps, { getPlants })(PlantDisplay);

const StyledDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1% auto;
  padding: 1% 3%;
`;
