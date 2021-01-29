import { CONNECTION_ERROR } from "../../../constants/actionTypes/api";
import http from "../../../helper/axios";
import {
  EDIT_EMPLOYEES_LOADING,
  EDIT_EMPLOYEES_LOAD_SUCCES,
  EDIT_EMPLOYEES_LOAD_ERROR,
} from "../../../constants/actionTypes/index";

export default ({id,  employeeName, email,age,roleId,departmentId,directManger,phone }) => (dispatch) => {
  dispatch({
    type: EDIT_EMPLOYEES_LOADING,
  });
  http.axiosInstance
    .post("employees/", {id,  employeeName, email,age,roleId,departmentId,directManger,phone })
    .then((res) => {
      dispatch({
        type: EDIT_EMPLOYEES_LOAD_SUCCES,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EDIT_EMPLOYEES_LOAD_ERROR,
        payload: err.response.data ? err.response.data.error :(err.response.status? "The name is already exit":  CONNECTION_ERROR),
      });
    });
};
