import { ERROR } from "video-react/lib/actions/video";
import { CONNECTION_ERROR } from "../../../constants/actionTypes/api";
import http from "../../../helper/axios";
import { EMPLOYEES_LOADING,EMPLOYEES_LOAD_EMPLOYEE ,EMPLOYEES_LOAD_ERROR} from '../../../constants/actionTypes/index';

export default () =>(dispatch) => {
    dispatch({

        type:EMPLOYEES_LOADING
    });
    http.axiosInstance
    .get("employees/")
    .then((res) => {dispatch({

        type:EMPLOYEES_LOAD_EMPLOYEE,
        payload:res.data.data,
    });})
    
    .catch((err) =>{dispatch({

        type:EMPLOYEES_LOAD_ERROR,
        payload:err.response? err.response.data.error.error: CONNECTION_ERROR,
    });});

 
};
