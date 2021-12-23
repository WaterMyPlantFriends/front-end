import axios from "axios";
import axiosWithAuth from "../utilities/axiosWithAuth";

export const SET_USER_ID = "SET_USER_ID";

export const setUserId = (id) => {
  return { type: SET_USER_ID, payload: id };
};
