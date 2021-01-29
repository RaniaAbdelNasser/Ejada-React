import { CONNECTION_ERROR } from '../../../constants/actionTypes/api';
import axiosInstance from '../../../helper/axios';
import { DELETE_EMPLOYEE_SUCCESS,DELETE_EMPLOYEE_LOADING ,DELETE_EMPLOYEE_ERROR} from '../../../constants/actionTypes/index';
import Axios from "axios";

export default (id)=> (dispatch)=>{
    var axios = require('axios');
    var data = JSON.stringify({"EmployeeID":id});
    
dispatch({

    type:DELETE_EMPLOYEE_LOADING,
    loading:true,
    payload:id,
});
    var config = {
      method: 'delete',
      url: 'http://localhost:5000/api/employees/delete',
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
            type:DELETE_EMPLOYEE_SUCCESS,
            loading:false,
            payload:id
            
                });
                window.location.pathname="/admin";
    })
    .catch(function (error) {
     dispatch({
type:DELETE_EMPLOYEE_ERROR,
loading:false,

payload:error.response? error.response.data: CONNECTION_ERROR,


});
    });



};