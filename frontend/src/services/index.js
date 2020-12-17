import axios from "axios";
// axios.defaults.headers.common['Access-Control-Allow-Origin']= '*';

  axios.defaults.withCredentials = true;
export default () => {
  return axios.create({baseURL: 'http://apigateway.toedu.me/nhom5'});
};