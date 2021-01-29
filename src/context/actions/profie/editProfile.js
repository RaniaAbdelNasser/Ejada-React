import { ERROR } from "video-react/lib/actions/video";
import { CONNECTION_ERROR } from "../../../constants/actionTypes/api";
import http from "../../../helper/axios";
import { EditProfile_LOADING,EditProfile_SUCCESS ,EditProfile_ERROR} from '../../../constants/actionTypes/index';

export default ({fName:firstName,lName:lastName,phoneNum, email}) =>(dispatch) => {
    dispatch({

        type:EditProfile_LOADING
    });
    
  http.axiosInstance
    .post("/api/editprofile",{firstName,lastName, email,phoneNum})
    .then((res) => {dispatch({

        type:EditProfile_SUCCESS,
        payload:"res.data",
    });
    window.location.pathname="/profile";
})
    
    .catch((err) =>{dispatch({

        type:EditProfile_ERROR,
        payload:err.response? err.response.data.error.error: CONNECTION_ERROR,
    });});

 
};
