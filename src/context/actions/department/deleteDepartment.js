import { CONNECTION_ERROR } from '../../../constants/actionTypes/api';
import axiosInstance from '../../../helper/axios';
import { DELETE_DEPARTMENT_SUCCESS,DELETE_DEPARTMENT_LOADING ,DELETE_DEPARTMENT_ERROR} from '../../../constants/actionTypes/index';
import Axios from "axios";

export default (id)=> (dispatch)=>{
    var axios = require('axios');
    var data = JSON.stringify({"DepartmentID":id});
    
dispatch({

    type:DELETE_DEPARTMENT_LOADING,
    loading:true,
    payload:id,
});
    var config = {
      method: 'delete',
      url: 'http://localhost:5000/api/departments/delete',
      headers: { 
        'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Authorization': `${localStorage.getItem("token")}`,
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
        dispatch({
            type:DELETE_DEPARTMENT_SUCCESS,
            loading:false,
            payload:id
            
                });
                window.location.pathname="/admin";
    })
    .catch(function (error) {
     dispatch({
type:DELETE_DEPARTMENT_ERROR,
loading:false,

payload:error.response? error.response.data: CONNECTION_ERROR,


});
    });
// axiosInstance.delete('/admin/api/deleteDEPARTMENT',{"id":id}, { 
//             'Content-Type': 'application/json'
//           },).then((res)=>{

//     dispatch({
// type:DELETE_COURSE_SUCCESS,
// loading:false,
// payload:id

//     });
// }).catch(

//     (err)=>{

// dispatch({
// type:DELETE_COURSE_ERROR,
// loading:false,

// payload:err.response? err.response.data.error: CONNECTION_ERROR,


// });

//     }
// )


};