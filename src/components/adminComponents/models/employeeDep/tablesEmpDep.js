import React, { useContext, useEffect, useState } from "react";
import { Row, Table, Button, Col, Spinner, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../../assets/css/tableStyle.css";
import deleteEmployee from "../../../../context/actions/employees/deleteEmployee";
import getEmployees from "../../../../context/actions/employees/getEmployees";
import editEmployee from "../../../../context/actions/employees/editEmployee";
import { GlobalContext } from "../../../../context/Provider";
import { useHistory } from "react-router-dom";
import { GeneralContext } from "../../../../context/generalContext";
import Pagination from "../../../commanComponents/pagination";

const TablesEmployeesDep = (props) => {
  const { employeeList } = props;
  const { getRolesAttributes } = useContext(GeneralContext);
  const { getRoles, setGetRoles } = getRolesAttributes();
  const { getDepartmentAttributes } = useContext(GeneralContext);
  const { getDepartment } = getDepartmentAttributes();
  const { getMangerAttributes } = useContext(GeneralContext);
  const { getManger } = getMangerAttributes();
  const history = useHistory();

  const {
    employeesDispatch,
    employeesState: {
      employeeDep: { loading, error, data },
    },
  } = useContext(GlobalContext);

  const handelDeletEmployee = (ID) => {
    deleteEmployee(ID)(employeesDispatch);
  };

  return (
    <>
      <Row className="m-2">
        <Table striped bordered hover responsive="sm" responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>employeeName</th>
              <th>email</th>
              <th>age</th>
              <th>phone</th>
              <th>role</th>
              <th>department</th>
              <th>directManger</th>

              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan="5" className="justify-content-center">
                  <Spinner animation="border" variant="secondary" size="lg" />
                </td>
              </tr>
            )}
            {employeeList?.length != 0 &&
              getRoles &&
              employeeList?.map((element) => (
                <tr key={element.EmployeeID}>
                  <td>{element.EmployeeID}</td>
                  <td>{element.employee_name}</td>
                  <td>{element.email}</td>
                  <td>{element.age}</td>
                  <td>{element.phone}</td>
                  <td>
                    {
                      getRoles?.find(
                        (element2) => element2.id === element.RoleID
                      ).name
                    }
                  </td>
                  <td>
                    {
                      getDepartment?.find(
                        (element2) => element2.id === element.DepartmentID
                      ).name
                    }
                  </td>
                  <td>
                    {element.DirectManager != null
                      ? getManger?.find(
                          (element2) =>
                            element2.EmployeeID === element.DirectManager
                        ).employee_name
                      : "null"}
                  </td>

                  <td>
                    {" "}
                    <Button
                      variant="danger"
                      onClick={() => {
                        handelDeletEmployee(element.EmployeeID);
                      }}
                      disabled={element.deleting}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}

            {error && (
              <tr>
                <td colSpan="5" className="justify-content-center">
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default TablesEmployeesDep;
