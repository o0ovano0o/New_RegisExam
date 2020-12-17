import axios from "axios";
// axios.defaults.headers.common['Access-Control-Allow-Origin']= '*';

  axios.defaults.withCredentials = false;
export default () => {
  var token = window.localStorage.getItem("x-token");
  return axios.create({baseURL: 'http://apigateway.toedu.me/nhom5',
    withCredentials: false,
    data: {
    },
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    }
  });
};