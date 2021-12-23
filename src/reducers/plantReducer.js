import { ADD_PLANT_START } from '../actions/plantActions.js'
import { DELETE_PLANT } from '../actions/plantActions.js'

const initialState = {
    addingPlant: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLANT_START:
            return {
                ...state,
                addingPlant: true
            }
        case DELETE_PLANT:
            return{
                ...state
            }
        default:
            return state;
    }
}

export default reducer; 