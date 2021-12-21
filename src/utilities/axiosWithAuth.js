import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    //this code makes it so all calls that use axiosWithAuth in the future don't need to include 'https://watermyplantz.herokuapp.com/api/'
    baseURL: "https://watermyplantz.herokuapp.com/api/",
    headers: {
      Authorization: token,
    },
  });
};

export default axiosWithAuth;