
import { DEPARTMENTS_LOADING, DEPARTMENTS_LOAD_ERROR, DEPARTMENTS_LOAD_DEPARTMENT, ADD_DEPARTMENTS_LOADING, ADD_DEPARTMENTS_LOAD_SUCCES, ADD_DEPARTMENTS_LOAD_ERROR, CLEAR_ADD_DEPARTMENT, DELETE_DEPARTMENT_SUCCESS, DELETE_DEPARTMENT_LOADING, EDIT_DEPARTMENTS_LOAD_ERROR, EDIT_DEPARTMENTS_LOAD_SUCCES, EDIT_DEPARTMENTS_LOADING, CLEAR_EDIT_DEPARTMENT } from '../../constants/actionTypes/index';


const departments = (state,{payload,type})=>{
    switch(type){
        case DEPARTMENTS_LOADING:{
            return {
                ...state,
                departments:{
                    ...state.departments,
                    loadingDepartment:true,
                },
            };
        }
      
        case DEPARTMENTS_LOAD_DEPARTMENT:{
            return {
                ...state,
                departments:{
                    ...state.departments,
                    loadingDepartment:false,
                    dataDepartment:payload,
                },
            };
        }
        case DEPARTMENTS_LOAD_ERROR:{
            return {
                ...state,
                departments:{
                    ...state.departments,
                    loadingDepartment:false,
                  errorDepartment:payload,
                },
            };
        }

 


    
        case EDIT_DEPARTMENTS_LOADING:{
            return {
                ...state,
                editdepartment:{
                    ...state.editdepartment,
                    errorDepartment: null,
                    loadingDepartment:true,
                },
            };
        }

        case  EDIT_DEPARTMENTS_LOAD_SUCCES:{
            return {
                ...state,
                editdepartment:{
                    ...state.editdepartment,
                    loadingDepartment:false,
                    dataDepartment:payload,
                },
                departments:{
                    ...state.departments,
                    loadingDepartment:false,
                    dataDepartment:[payload,...state.departments.dataDepartment],
                },
            };
        }

        case   EDIT_DEPARTMENTS_LOAD_ERROR:{
            return {
                ...state,
                editdepartment:{
                    ...state.editdepartment,
                    loadingDepartment:false,
                    errorDepartment:payload,
                },
            };
        }




        case ADD_DEPARTMENTS_LOADING:{
            return {
                ...state,
                adddepartment:{
                    ...state.adddepartment,
                    errorDepartment: null,
                    loadingDepartment:true,
                },
            };
        }

        case  ADD_DEPARTMENTS_LOAD_SUCCES:{
            return {
                ...state,
                adddepartment:{
                    ...state.adddepartment,
                    loadingDepartment:false,
                    dataDepartment:payload,
                },
                departments:{
                    ...state.departments,
                    loadingDepartment:false,
                    dataDepartment:[payload,...state.departments.dataDepartment],
                },
            };
        }

        case   ADD_DEPARTMENTS_LOAD_ERROR:{
            return {
                ...state,
                adddepartment:{
                    ...state. adddepartment,
                    loadingDepartment:false,
                    errorDepartment:payload,
                },
            };
        }

        case CLEAR_ADD_DEPARTMENT:{
            return {
                ...state,
                adddepartment:{
                    ...state. adddepartment,
                    errorDepartment:null,
                    loadingDepartment:false,
                   dataDepartment:null
                },
            };
        }

        case CLEAR_EDIT_DEPARTMENT:{
            return {
                ...state,
                editdepartment:{
                    ...state.editdepartment,
                    errorDepartment:null,
                    loadingDepartment:false,
                   dataDepartment:null
                },
            };
        }

        case  DELETE_DEPARTMENT_SUCCESS:{
            return {
                ...state,
                
                departments:{
                    ...state.departments,
                    loadingDepartment:false,
                    dataDepartment: state.departments.dataDepartment.filter((item) => item.id !== payload),
                },
            };
        }

        case  DELETE_DEPARTMENT_LOADING:{
            return {
                ...state,
                
                departments:{
                    ...state.departments,
                    loadingDepartment: false,
                    dataDepartment: state.departments.dataDepartment.map((item) => {
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

export default departments;