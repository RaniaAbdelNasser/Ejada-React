import { CONNECTION_ERROR } from "../../../constants/actionTypes/api";
import http from "./../../../helper/axios";
import {
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from "./../../../constants/actionTypes/index";
import Axios from "axios";

export default ({ email, password }) => (dispatch) => {
 dispatch({
   type: SIGNUP_LOADING,
 });

  http.axiosInstance
    .post("users/", {email,password})
    .then((res) => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: "res.data",
      });
    })
    .catch((err) => {
      dispatch({
        type: SIGNUP_ERROR,
        payload: err.response.data ? err.response.data.error :(err.response.status? "The E-mail is already exit":  CONNECTION_ERROR),
      });
    });
};
