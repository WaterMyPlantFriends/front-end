import { ADD_PLANT } from '../actions/plantActions.js'
import { DELETE_PLANT } from '../actions/plantActions.js'
import { SET_PLANTS } from '../actions/plantActions.js'

const initialState = {
    plants: [],
    addingPlant: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PLANTS:
            return{
                ...state,
                plants: action.payload
            }
        case ADD_PLANT:
            return {
                ...state,
                addingPlant: true
            }
        case DELETE_PLANT:
            console.log(state.plants)
            return{
                ...state,
                plants: state.plants.filter(function(plant) {
                    return plant.plant_id !== action.payload
                })
            }
        default:
            return state;
    }
}

export default reducer; 