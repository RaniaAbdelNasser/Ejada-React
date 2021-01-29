import {  LOGIN_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING ,EditProfile_ERROR} from "../../constants/actionTypes";
import {  LOGIN_LOADING, LOGIN_ERROR, SIGNUP_SUCCESS,EditProfile_LOADING,EditProfile_SUCCESS } from './../../constants/actionTypes/index';

const auth = (state,{payload,type})=>{
    switch(type){
       

       

        case LOGIN_LOADING:{
            return {
                ...state,
                logIn:{
                    ...state.logIn,
                  
                    loading:true,
                },
            };
        }


        case LOGIN_SUCCESS:{
            return {
                ...state,
                logIn:{
                    ...state.logIn,
                    loading:false,
                    data:payload,
                },
            };
        }

        case LOGIN_ERROR:{
            return {
                ...state,
                logIn:{
                    ...state.logIn,
                    loading:false,
                    error:payload,
                },
            };
        }



        case SIGNUP_LOADING:{
            return {
                ...state,
                signUp:{
                    ...state.signUp,
                 
                    loading:true,
                },
            };
        }
    


        case SIGNUP_SUCCESS:{
            return {
                ...state,
                signUp:{
                    ...state.signUp,
                    loading:false,
                    data:payload,
                },
            };
        }


        case SIGNUP_ERROR:{
            return {
                ...state,
                signUp:{
                    ...state.signUp,
                    loading:false,
                    error:payload,
                },
            };
        }



        case EditProfile_LOADING:{
            return {
                ...state,
                editProfile:{
                    ...state.editProfile,
                 
                    loadingeditProfile:true,
                },
            };
        }
    


        case EditProfile_SUCCESS:{
            return {
                ...state,
                editProfile:{
                    ...state.editProfile,
                    loadingeditProfile:false,
                    dataeditProfile:payload,
                },
            };
        }


        case EditProfile_ERROR:{
            return {
                ...state,
                editProfile:{
                    ...state.editProfile,
                    loadingeditProfile:false,
                    erroreditProfile:payload,
                },
            };
        }


        default :
        return state;
    }
};

export default auth;