import React,{ useReducer, createContext } from "react";
import authInitialState from "./initialstatus/authInitialState";

import employeeIntialState from "./initialstatus/employeeIntialState";
import departmentIntialState from "./initialstatus/departmentIntialState";
import roleIntialState from "./initialstatus/roleIntialState";

import auth from "./redusers/auth";

import employee from "./redusers/employee";
import departments from "./redusers/department";
import roles from "./redusers/role";

export const GlobalContext = createContext({});
export const GlobalProvider = ({ children }) => {
  const [authState,  authDispatch] = useReducer(
    auth,
    authInitialState
  );
 
 
  const [departmentsState, departmentsDispatch] = useReducer(departments, departmentIntialState);
  const [employeesState, employeesDispatch] = useReducer(employee, employeeIntialState);
  const [rolesState, rolesDispatch] = useReducer(roles, roleIntialState);
  
  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch, 
      
        employeesState,
        employeesDispatch,
        departmentsState,

        departmentsDispatch,
        rolesState,
        rolesDispatch,
      
       
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
