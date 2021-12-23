import { SET_USER_ID } from "../actions/profileActions";

const initialState = {
  user_id: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ID:
      return { ...state, user_id: action.payload };
    default:
      return state;
  }
};

export default reducer;
