import { ERROR } from "video-react/lib/actions/video";
import { CONNECTION_ERROR } from "../../../constants/actionTypes/api";
import http from "../../../helper/axios";
import {

 ROLES_LOADING,
 ROLES_LOAD_ROLE,
 ROLES_LOAD_ERROR,
} from "../../../constants/actionTypes/index";

export default () => (dispatch) => {
  dispatch({
    type:ROLES_LOADING,
  });
  http.axiosInstance
    .get('roles/')
    .then((res) => {
    
      dispatch({
        type:ROLES_LOAD_ROLE,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type:ROLES_LOAD_ERROR,
        payload: err.response ? err.response.data.error : CONNECTION_ERROR,
      });
    });
};
