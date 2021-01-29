import { ERROR } from "video-react/lib/actions/video";
import { CONNECTION_ERROR } from "../../../constants/actionTypes/api";
import http from "../../../helper/axios";
import { DEPARTMENTS_LOADING,DEPARTMENTS_LOAD_DEPARTMENT ,DEPARTMENTS_LOAD_ERROR} from '../../../constants/actionTypes/index';

export default () =>(dispatch) => {
    dispatch({

        type:DEPARTMENTS_LOADING
    });
    http.axiosInstance
    .get("departments/")
    .then((res) => {dispatch({

        type:DEPARTMENTS_LOAD_DEPARTMENT,
        payload:res.data.data,
    });})
    .catch((err) =>{dispatch({

        type:DEPARTMENTS_LOAD_ERROR,
        payload:err.response? err.response.data.error: CONNECTION_ERROR,
    });});
};
