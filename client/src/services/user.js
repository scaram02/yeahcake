import axios from "axios";
// const axios = require('axios');

const signup = (username, password) => {
  return axios
    .post("/api/user/signup", {
      username: username,
      password: password
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};



const login = (username, password) => {
  return axios
    .post("/api/user/login", {
      username: username,
      password: password
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

const logout = () => {
  axios.delete("/api/user/logout");
};

export { signup, login, logout};