import AdminContainer from "../containers/Admin";

import LoginContainer from "./../containers/Login/index";

import { GenericNotFound } from "./../containers/generaticNotFound";
import AddEmployee from "./../components/adminComponents/models/employee/addEmployee";

import AddDepartment from "./../components/adminComponents/models/department/addDepartment";

const routes = [
  {
    path: "/",
    component: LoginContainer,
    title: "Login",
    needsAuth: false,
  },

  {
    path: "/admin",
    component: AdminContainer,
    title: "AdminPanel",
    needsAuth: true,
  },
  {
    path: "/logout",

    title: "logout",
    needsAuth: false,
  },
  {
    path: "/admin/addemployees",
    component: AddEmployee,
    title: "addEmployees",
    needsAuth: true,
  },

  {
    path: "/admin/adddepartments",
    component: AddDepartment,
    title: "addDepartments",
    needsAuth: true,
  },

  {
    path: "/error",
    component: GenericNotFound,
    title: "error",
    needsAuth: false,
  },
];
export default routes;
