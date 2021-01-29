import axios from 'axios';
const baseURL=process.env.REACT_APP_BACKEND_URL;
let headers={};
const tokenKey = "token";

headers= {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  };
 

  headers = { 'Authorization': `${localStorage.getItem(tokenKey)}`,
  'Content-Type': 'application/json'}


const axiosInstance =axios.create({
baseURL:baseURL,
headers,
});

export default {axiosInstance:axiosInstance};