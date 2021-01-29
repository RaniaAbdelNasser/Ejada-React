import { CONNECTION_ERROR } from "../../../constants/actionTypes/api";
import http from "./../../../helper/axios";
// import setJwt from "./../../../helper/axios";
import jwtDecode from "jwt-decode";
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "./../../../constants/actionTypes/index";
import Axios from "axios";
const tokenKey = "token";


export default  ({ email, password }) => (dispatch) => {
 dispatch({
   type: LOGIN_LOADING,
 });

http.axiosInstance
    .post("users/login", {email,password})
    .then((res) => {
     
     if(res.data.success==0){
      
      dispatch({
        type: LOGIN_ERROR,
        payload: res.data.data ,
      });
      return;
     }
      localStorage.setItem(tokenKey, "Bearer " +res.data.token);
    
  
  function getJwt() {
        return localStorage.getItem(tokenKey);
      }
    
    
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response ? err.response.data :  CONNECTION_ERROR,
      });
    });
};
