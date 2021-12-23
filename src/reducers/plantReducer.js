import { ADD_PLANT_START } from '../actions/plantActions.js'

const initialState = {
    addingPlant: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLANT_START:
            console.log('reducer')
            return {
                ...state,
                addingPlant: true
            }
        default:
            return state;
    }
}

export default reducer; 