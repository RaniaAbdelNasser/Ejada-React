
import { EMPLOYEES_LOADING, EMPLOYEES_LOAD_ERROR, EMPLOYEES_LOAD_EMPLOYEE, ADD_EMPLOYEES_LOADING, ADD_EMPLOYEES_LOAD_SUCCES, ADD_EMPLOYEES_LOAD_ERROR, CLEAR_ADD_EMPLOYEE, DELETE_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_LOADING, EDIT_EMPLOYEES_LOAD_ERROR, EDIT_EMPLOYEES_LOAD_SUCCES, EDIT_EMPLOYEES_LOADING, CLEAR_EDIT_EMPLOYEE, GET_EMPDEP_LOADING, GET_EMPDEP_ERROR } from '../../constants/actionTypes/index';
import { GET_EMPDEP_SUCCESS } from './../../constants/actionTypes/index';


const employees = (state,{payload,type})=>{
    switch(type){
        case EMPLOYEES_LOADING:{
            return {
                ...state,
                employees:{
                    ...state.employees,
                    loading:true,
                },
            };
        }
      
        case EMPLOYEES_LOAD_EMPLOYEE:{
            return {
                ...state,
                employees:{
                    ...state.employees,
                    loading:false,
                    data:payload,
                },
            };
        }
        case EMPLOYEES_LOAD_ERROR:{
            return {
                ...state,
                employees:{
                    ...state.employees,
                    loading:false,
                  error:payload,
                },
            };
        }

        case GET_EMPDEP_LOADING:{
            return {
                ...state,
                employeeDep:{
                    ...state.employeeDep,
                    loading:true,
                },
            };
        }
      
        case GET_EMPDEP_SUCCESS:{
            return {
                ...state,
                employeeDep:{
                    ...state.employeeDep,
                    loading:false,
                    data:payload,
                },
            };
        }
        case GET_EMPDEP_ERROR:{
            return {
                ...state,
                employeeDep:{
                    ...state.employeeDep,
                    loading:false,
                  error:payload,
                },
            };
        }



    
        case EDIT_EMPLOYEES_LOADING:{
            return {
                ...state,
                editemployee:{
                    ...state.editemployee,
                    error: null,
                    loading:true,
                },
            };
        }

        case  EDIT_EMPLOYEES_LOAD_SUCCES:{
            return {
                ...state,
                editemployee:{
                    ...state.editemployee,
                    loading:false,
                    data:payload,
                },
                employees:{
                    ...state.employees,
                    loading:false,
                    data:[payload,...state.employees.data],
                },
            };
        }

        case   EDIT_EMPLOYEES_LOAD_ERROR:{
            return {
                ...state,
                editemployee:{
                    ...state.editemployee,
                    loading:false,
                    error:payload,
                },
            };
        }




        case ADD_EMPLOYEES_LOADING:{
            return {
                ...state,
                addemployee:{
                    ...state.addemployee,
                    error: null,
                    loading:true,
                },
            };
        }

        case  ADD_EMPLOYEES_LOAD_SUCCES:{
            return {
                ...state,
                addemployee:{
                    ...state.addemployee,
                    loading:false,
                    data:payload,
                },
                employees:{
                    ...state.employees,
                    loading:false,
                    data:[payload,...state.employees.data],
                },
            };
        }

        case   ADD_EMPLOYEES_LOAD_ERROR:{
            return {
                ...state,
                addemployee:{
                    ...state. addemployee,
                    loading:false,
                    error:payload,
                },
            };
        }

        case CLEAR_ADD_EMPLOYEE:{
            return {
                ...state,
                addemployee:{
                    ...state. addemployee,
                    error:null,
                    loading:false,
                   data:null
                },
            };
        }

        case CLEAR_EDIT_EMPLOYEE:{
            return {
                ...state,
                editemployee:{
                    ...state.editemployee,
                    error:null,
                    loading:false,
                   data:null
                },
            };
        }

        case  DELETE_EMPLOYEE_SUCCESS:{
            return {
                ...state,
                
                employees:{
                    ...state.employees,
                    loading:false,
                    data: state.employees.data.filter((item) => item.id !== payload),
                },
            };
        }

        case  DELETE_EMPLOYEE_LOADING:{
            return {
                ...state,
                
                employees:{
                    ...state.employees,
                    loading: false,
                    data: state.employees.data.map((item) => {
                      if (item.id === payload) {
                        return { ...item, deleting: true };
                      }
                      return item;
                    }),
                  },
                };
              }

        default :
        return state;
    }
};

export default employees;