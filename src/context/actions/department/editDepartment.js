import { CONNECTION_ERROR } from "../../../constants/actionTypes/api";
import http from "../../../helper/axios";
import {
  EDIT_DEPARTMENTS_LOADING,
  EDIT_DEPARTMENTS_LOAD_SUCCES,
  EDIT_DEPARTMENTS_LOAD_ERROR,
} from "../../../constants/actionTypes/index";

export default ({DepartmentID, departmentName, employeeId}) => (dispatch) => {
  dispatch({
    type: EDIT_DEPARTMENTS_LOADING,
  });
  http.axiosInstance
    .post("departments/", {DepartmentID,  departmentName, employeeId })
    .then((res) => {
      dispatch({
        type: EDIT_DEPARTMENTS_LOAD_SUCCES,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EDIT_DEPARTMENTS_LOAD_ERROR,
        payload: err.response.data ? err.response.data.error :(err.response.status? "The name is already exit":  CONNECTION_ERROR),
      });
    });
};
