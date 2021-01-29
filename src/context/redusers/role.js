
import { ROLES_LOADING, ROLES_LOAD_ERROR, ROLES_LOAD_ROLE, ADD_ROLES_LOADING, ADD_ROLES_LOAD_SUCCES, ADD_ROLES_LOAD_ERROR, CLEAR_ADD_ROLE, DELETE_ROLE_SUCCESS, DELETE_ROLE_LOADING, EDIT_ROLES_LOAD_ERROR, EDIT_ROLES_LOAD_SUCCES, EDIT_ROLES_LOADING, CLEAR_EDIT_ROLE } from '../../constants/actionTypes/index';


const roles = (state,{payload,type})=>{
    switch(type){
        case ROLES_LOADING:{
            return {
                ...state,
                roles:{
                    ...state.roles,
                    loadingRoles:true,
                },
            };
        }
      
        case ROLES_LOAD_ROLE:{
            return {
                ...state,
                roles:{
                    ...state.roles,
                    loadingRoles:false,
                    dataRoles:payload,
                },
            };
        }
        case ROLES_LOAD_ERROR:{
            return {
                ...state,
                roles:{
                    ...state.roles,
                    loadingRoles:false,
                  errorRoles:payload,
                },
            };
        }




    
        case EDIT_ROLES_LOADING:{
            return {
                ...state,
                editrole:{
                    ...state.editrole,
                    errorRoles: null,
                    loadingRoles:true,
                },
            };
        }

        case  EDIT_ROLES_LOAD_SUCCES:{
            return {
                ...state,
                editrole:{
                    ...state.editrole,
                    loadingRoles:false,
                    dataRoles:payload,
                },
                // roles:{
                //     ...state.roles,
                //     loadingRoles:false,
                //     dataRoles:[payload,...state.roles.data],
                // },
            };
        }

        case   EDIT_ROLES_LOAD_ERROR:{
            return {
                ...state,
                editrole:{
                    ...state.editrole,
                    loadingRoles:false,
                    errorRoles:payload,
                },
            };
        }




        case ADD_ROLES_LOADING:{
            return {
                ...state,
                addrole:{
                    ...state.addrole,
                    errorRoles: null,
                    loadingRoles:true,
                },
            };
        }

        case  ADD_ROLES_LOAD_SUCCES:{
            return {
                ...state,
                addrole:{
                    ...state.addrole,
                    loadingRoles:false,
                    dataRoles:payload,
                },
                // roles:{
                //     ...state.roles,
                //     loadingRoles:false,
                //     dataRoles:[payload,...state.roles.data],
                // },
            };
        }

        case   ADD_ROLES_LOAD_ERROR:{
            return {
                ...state,
                addrole:{
                    ...state. addrole,
                    loadingRoles:false,
                    errorRoles:payload,
                },
            };
        }

        case CLEAR_ADD_ROLE:{
            return {
                ...state,
                addrole:{
                    ...state. addrole,
                    errorRoles:null,
                    loadingRoles:false,
                   dataRoles:null
                },
            };
        }

        case CLEAR_EDIT_ROLE:{
            return {
                ...state,
                editrole:{
                    ...state.editrole,
                    errorRoles:null,
                    loadingRoles:false,
                   dataRoles:null
                },
            };
        }

        case  DELETE_ROLE_SUCCESS:{
            return {
                ...state,
                
                roles:{
                    ...state.roles,
                    loadingRoles:false,
                    dataRoles: state.roles.dataRoles.filter((item) => item.id !== payload),
                },
            };
        }

        case  DELETE_ROLE_LOADING:{
            return {
                ...state,
                
                roles:{
                    ...state.roles,
                    loadingRoles: false,
                    dataRoles: state.roles.dataRoles.map((item) => {
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

export default roles;