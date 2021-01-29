import { CONNECTION_ERROR } from "../../../constants/actionTypes/api";
import http from "./../../../helper/axios";
import {
  ADD_EMPLOYEES_LOADING,
  ADD_EMPLOYEES_LOAD_SUCCES,
  ADD_EMPLOYEES_LOAD_ERROR,
} from "./../../../constants/actionTypes/index";
import Axios from "axios";

export default ({ employeeName, email,age,roleId,departmentId,directManger,phone}) => (dispatch) => {
 dispatch({
   type: ADD_EMPLOYEES_LOADING,
 });

  http.axiosInstance
    .post("employees/", {employeeName,email,age,roleId,departmentId,directManger,phone})
    .then((res) => {
      dispatch({
        type: ADD_EMPLOYEES_LOAD_SUCCES,
        payload: res.data.data,
      });
      if(res==null){
        throw console.log('erorr');
      }
    })
     .catch(function (err)  {
    
     
  
      dispatch({
        type:  ADD_EMPLOYEES_LOAD_ERROR,
        payload: err.response.data ? err.response.data.error :(err.response.status? "The name is already exit":  CONNECTION_ERROR),
      });
    });
};
