import { ADD_PLANT_START } from '../actions/plantActions'

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
        default:
            return state;
    }
}

export default reducer 