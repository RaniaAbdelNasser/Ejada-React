import React, { useEffect, useState } from "react";
import { Row, Table, Button, Col, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../../assets/css/tableStyle.css";
import { GlobalContext } from "../../../../context/Provider";

import deleteDepartment from "../../../../context/actions/department/deleteDepartment";
import { GeneralContext } from "../../../../context/generalContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
const TablesDepartment = (props) => {
  const { dataDepartmentList } = props;
  const history = useHistory();

  const { getMangerAttributes } = useContext(GeneralContext);
  const { getManger } = getMangerAttributes();
  const {
    departmentsDispatch,
    departmentsState: {
      departments: { loadingDepartment, errorDepartment, dataDepartment },
    },
  } = useContext(GlobalContext);

  const handelDeletDepartment = (ID) => {
    deleteDepartment(ID)(departmentsDispatch);
  };

  return (
    <Row className="m-2">
      <Table striped bordered hover responsive="sm" responsive className="mt-1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>

            <th>Department Manger</th>
           
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {dataDepartment?.length != 0 &&
            dataDepartmentList?.map((element) => (
              <tr key={element.DepartmentID}>
                <td>{element.DepartmentID}</td>
                <td>{element.department_name}</td>
                <td>
                  {" "}
                  {element.EmployeeID != null
                    ? getManger?.find(
                        (element2) => element2.EmployeeID === element.EmployeeID
                      ).employee_name
                    : "null"}
                </td>

                
                <td>
                  {" "}
                  <Button
                    variant="danger"
                    onClick={() => {
                      handelDeletDepartment(element.DepartmentID);
                    }}
                    disabled={element.deleting}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}

          {errorDepartment && (
            <tr>
              <td colSpan="5" className="justify-content-center">
                <div className="alert alert-danger" role="alert">
                  {errorDepartment}
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Row>
  );
};

export default TablesDepartment;
