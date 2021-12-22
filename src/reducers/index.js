import { combineReducers } from 'redux';

import profileReducer from './profileReducer';
import plantProfile from './plantReducer';

const rootReducer = combineReducers({profileReducer, plantProfile})

export default rootReducer;