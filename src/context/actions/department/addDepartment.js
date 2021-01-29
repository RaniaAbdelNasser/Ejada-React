import { CONNECTION_ERROR } from "../../../constants/actionTypes/api";
import http from "../../../helper/axios";
import {
  ADD_DEPARTMENTS_LOADING,
  ADD_DEPARTMENTS_LOAD_SUCCES,
  ADD_DEPARTMENTS_LOAD_ERROR,
} from "../../../constants/actionTypes/index";
import Axios from "axios";

export default ({ departmentName, employeeId }) => (dispatch) => {
 dispatch({
   type: ADD_DEPARTMENTS_LOADING,
 });
//  console.log('courseId', courseId);

http.axiosInstance
    .post("departments/", {departmentName,employeeId},)
    .then((res) => {
    
      dispatch({
        type: ADD_DEPARTMENTS_LOAD_SUCCES,
        payload: res.data,
      });
    })
    .catch(function (err)  {
    
     
      
      dispatch({
        type: ADD_DEPARTMENTS_LOAD_ERROR,
        payload: err.response.data ? err.response.data.error :(err.response.status? "The name is already exit":  CONNECTION_ERROR),
      });
    });
};
