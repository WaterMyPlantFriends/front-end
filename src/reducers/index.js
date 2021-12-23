import { combineReducers } from 'redux';

import profileReducer from './profileReducer';
import plantReducer from './plantReducer';

const rootReducer = combineReducers({profileReducer, plantReducer})

export default rootReducer;