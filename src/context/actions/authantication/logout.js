
import axiosInstance from "./../../../helper/axios";

export default () => {
  const tokenKey = "token";
  localStorage.removeItem(tokenKey);
  window.location.pathname="/";
 
};
