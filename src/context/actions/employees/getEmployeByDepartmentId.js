import { ERROR } from "video-react/lib/actions/video";
import { CONNECTION_ERROR } from "../../../constants/actionTypes/api";
import http from "../../../helper/axios";
import { GET_EMPDEP_LOADING,GET_EMPDEP_SUCCESS ,GET_EMPDEP_ERROR} from '../../../constants/actionTypes/index';

export default (id) =>(dispatch) => {
    dispatch({

        type:GET_EMPDEP_LOADING
    });
    http.axiosInstance
    .get(`employees/${id}`)
    .then((res) => {
       
        
        dispatch({

        type:GET_EMPDEP_SUCCESS,
        payload:res.data.data,
    });})
    .catch((err) =>{dispatch({

        type:GET_EMPDEP_ERROR,
        payload:err.response? err.response.data.error: CONNECTION_ERROR,
    });});
};
