import axios from 'axios';
import axiosWithAuth from '../utilities/axiosWithAuth';

export const ADD_PLANT = "ADD_PLANT"
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

export function addPlantByUserId(user_id) {
    return (dispatch) => {
        
    }
}

export const setPlants = (plants) => {
    return({type:SET_PLANTS, payload:plants})
}

export const addPlant = (plant) => {
    return({type: ADD_PLANT, payload: plant})
}

export const deletePlant = (id) => {
    return({type:DELETE_PLANT, payload:id})
}
