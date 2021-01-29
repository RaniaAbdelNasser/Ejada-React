import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../../assets/css/sidebarStyle.css";

import TablesEmployees from "./models/employee/tablesEmployee";
import TablesDepartment from "./models/department/tablesDepartment";
import TablesEmpDep from "./models/employeeDep/tablesEmpDep";
import Employees from "./models/employee/employee";
import Department from "./models/department/department";
import EmployeesDep from "./models/employeeDep/employeeDep";

const SidebarAdmin = () => {
  const [current, setcurrent] = useState("0");

  return (
    <div>
      <div className=" grid-body">
        <Row className="m-0 p-0 ">
          <Col xs lg="3" className=" p-0 ">
            <div className="style-sidebar-accountsettings border-right ">
              <div className="p-2 border-bottom">
                <Row className=" m-0 mb-3 "></Row>
                <Row className=" m-0 mb-3 ">
                  <span className=" col-sm-3 px-1">
                    <div id="circle3">
                      <span className="justify-content-center  circle-text3">
                        OM
                      </span>
                    </div>
                  </span>
                  <span className="col ml-1">
                    <span className="row style-NameProfile-t1">Admin</span>
                    <span className="row style-NameProfile-t2">
                      Office Manger{" "}
                    </span>
                  </span>
                </Row>
              </div>
              <div className="mt-2 pb-5">
                <NavLink to="#employee" onClick={() => setcurrent("0")}>
                  {" "}
                  <div
                    className={
                      current == "0"
                        ? "active style-link-profilesetting "
                        : "style-link-profilesetting"
                    }
                  >
                    Employee
                  </div>
                </NavLink>
                <NavLink to="#department" onClick={() => setcurrent("1")}>
                  {" "}
                  <div
                    className={
                      current == "1"
                        ? "active style-link-profilesetting "
                        : "style-link-profilesetting"
                    }
                  >
                    Department
                  </div>
                </NavLink>
                <NavLink to="#employeeDep" onClick={() => setcurrent("2")}>
                  {" "}
                  <div
                    className={
                      current == "2"
                        ? "active style-link-profilesetting "
                        : "style-link-profilesetting"
                    }
                  >
                    Employee of Department
                  </div>
                </NavLink>
              </div>
            </div>
          </Col>
          {current == "0" ? (
            <Employees />
          ) : current == "1" ? (
            <Department />
          ) : (
            <EmployeesDep />
          )}
        </Row>
      </div>
    </div>
  );
};

export default SidebarAdmin;
