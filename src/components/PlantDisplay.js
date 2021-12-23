import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Plant from './Plant';
import { connect } from 'react-redux';
import { getPlants } from '../actions/plantActions';

const StyledDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1% auto;
    padding: 1% 3%;
`

const mapStateToProps = (state) => {
    return({
        plants: state.plantReducer.plants
    })
  }

const PlantDisplay = (props) => {
    props.getPlants()
    // const [plants, setPlants] = useState([]);
    // // get plants by user id
    // // const getPlants = (userId) => {
    // //     axios.get(`https://watermyplantz.herokuapp.com/api/users/${userId}/plants`)
    // //         .then(resp => {
    // //             console.log(resp);
    // //             // setPlants here
    // //         })
    // //         .catch(err => {
    // //             console.error(err);
    // //         })
    // // }
    // // get all plants
    // const getPlants = () => {
    //     axios.get('https://watermyplantz.herokuapp.com/api/plants')
    //         .then(resp => {
    //             setPlants(resp.data);
    //             console.log(resp.data)
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         })
    // }
    // useEffect(() => {
    //     getPlants();
    // }, []);
    if (!props.plants) return <h3>Please login.</h3>
    return (
        <StyledDiv className='plantDisplay container'>
            {
                props.plants.filter(p => p.user_id === null).map(plant => {
                    return(
                        <Plant
                            id={plant.plant_id}
                            nickname={plant.nickname}
                            species={plant.species}
                            h2oFrequency={plant.h2o_frequency}
                            image={plant.image_url}
                        />
                    )
                })
            }
        </StyledDiv>
    )
}

export default connect (mapStateToProps, {getPlants}) (PlantDisplay);