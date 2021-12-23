import axios from 'axios';

export const ADD_PLANT_START = "ADD_PLANT_START"
export const DELETE_PLANT = "DELETE_PLANT"
export const GET_PLANTS = "GET_PLANTS"
export const SET_PLANTS = "SET_PLANTS"

export const getPlants = () => {
    return (dispatch) => {
        axios.get('https://watermyplantz.herokuapp.com/api/plants')
            .then(resp => {
                dispatch({type: SET_PLANTS, payload: resp.data});
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export const setPlants = (plants) => {
    return({type:SET_PLANTS, payload:plants})
}

export const addPlantStart = () => {
    return({type: ADD_PLANT_START})
}

export const deletePlant = () => {
    return({type:DELETE_PLANT})
}
