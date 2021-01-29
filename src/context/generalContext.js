import React, { createContext, useState, useEffect, useContext } from "react";
import getEmployees from "./actions/employees/getEmployees";

import getRole from "./actions/role/getRole";

import { GlobalContext } from "./Provider";
import getAllDepartments from "./actions/department/getAllDepartments";

export const GeneralContext = createContext({});
export const GeneralEditForm = (props) => {
  const { children } = props;
  const [editEmployeeform, setEditEmployeeForm] = useState("");
  const attributesSetterEmployee = { setEditEmployeeForm };
  const attributesValueEmployee = { editEmployeeform };
  const [getRoles, setGetRoles] = useState("");
  const [getDepartment, setGetDepartment] = useState(true);
  const [getManger, setGetManger] = useState(true);
  const {
    employeesDispatch,
    employeesState: {
      employees: { loading, error, data },
    },
  } = useContext(GlobalContext);

  const {
    departmentsDispatch,
    departmentsState: {
      departments: { loadingDepartment, errorDepartment, dataDepartment },
    },
  } = useContext(GlobalContext);

  const {
    rolesDispatch,
    rolesState: {
      roles: { loadingRoles, errorRoles, dataRoles },
    },
  } = useContext(GlobalContext);

  const [authenticated, setauthenticated] = useState(false);
  const ids = [];
  const form = {};

  const tokenKey = "token";
  const isAuthanticted = localStorage.getItem(tokenKey);
  const roleArray = [];
  const departmentArray = [];

  useEffect(() => {
    if (isAuthanticted != null && isAuthanticted != "") {
      getRole()(rolesDispatch);
      getAllDepartments()(departmentsDispatch);
      getEmployees()(employeesDispatch);
      setauthenticated(true);
    } else {
      setauthenticated(false);
    }
  }, []);

  if (dataRoles != null && authenticated) {
    dataRoles.forEach((element) => {
      const newrole = { name: element.RoleName, id: element.RoleID };
      roleArray.push(newrole);
    });
    setGetRoles(roleArray);

    setauthenticated(false);
  }

  if (dataDepartment != null && getDepartment == true) {
    dataDepartment.forEach((element) => {
      const newdep = {
        name: element.department_name,
        id: element.DepartmentID,
      };
      departmentArray.push(newdep);
    });
    setGetDepartment(departmentArray);
   
  }
  if (data?.length != 0 && getManger == true) {
    const mangersArray = data?.filter((element) => element.RoleID == 2||element.RoleID == 1);
    setGetManger(mangersArray);
  }
 
  const getRolesAttributes = () => {
    return { getRoles, setGetRoles };
  };
  const getDepartmentAttributes = () => {
    return { getDepartment, setGetDepartment };
  };
  const getMangerAttributes = () => {
    return { getManger, setGetManger };
  };
  const getEditProfileAttributes = () => {
    return { form };
  };
  const getEditEmployeeAttributes = () => {
    return { attributesSetterEmployee, attributesValueEmployee };
  };
  const [editDepartmentform, setEditDepartmentForm] = useState("");
  const getEditDepartmentAttributes = () => {
    return { editDepartmentform, setEditDepartmentForm };
  };

  const [employeeSelected, setemployeeSelected] = useState("");
  const getemployeeSelectedAttributes = () => {
    return { employeeSelected, setemployeeSelected };
  };

  


  return (
    <GeneralContext.Provider
      value={{
        getRolesAttributes,
        getMangerAttributes,
        getDepartmentAttributes,
        getEditProfileAttributes,
      
        getemployeeSelectedAttributes,
      
        getEditEmployeeAttributes,
        getEditDepartmentAttributes,
       
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
