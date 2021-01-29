import React, { useContext, useEffect, useState } from "react";
import {
  Row,
  Table,
  Button,
  Col,
  Spinner,
  Form,
  Modal,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../../assets/css/tableStyle.css";
import deleteEmployee from "../../../../context/actions/employees/deleteEmployee";
import getEmployees from "../../../../context/actions/employees/getEmployees";
import editEmployee from "../../../../context/actions/employees/editEmployee";
import { GlobalContext } from "../../../../context/Provider";
import { useHistory } from "react-router-dom";
import { GeneralContext } from "../../../../context/generalContext";
import Pagination from "../../../commanComponents/pagination";
import { paginate } from "../../../../units/paginate";
import TablesEmployeesDep from "./tablesEmpDep";
import Department from "./../department/department";
import getEmployeByDepartmentId from "../../../../context/actions/employees/getEmployeByDepartmentId";

const EmployeesDep = () => {
  const { getRolesAttributes } = useContext(GeneralContext);
  const { getRoles, setGetRoles } = getRolesAttributes();
  const { getDepartmentAttributes } = useContext(GeneralContext);
  const { getDepartment } = getDepartmentAttributes();
  const { getMangerAttributes } = useContext(GeneralContext);
  const { getManger } = getMangerAttributes();
  const [DepartmentID, setDepartmentID] = useState({});
  const history = useHistory();
  const [currentPage, setcurrentPage] = useState(1);
  const [clickedButton, setclickedButton] = useState(false);
  const pageSize = 2;
  const {
    employeesDispatch,
    employeesState: {
      employeeDep: { loading, error, data },
    },
  } = useContext(GlobalContext);
  let employeeList;
  if (data?.length != 0) {
    employeeList = paginate(data, pageSize, currentPage);
  }
  const onChange = (e) => {
    getEmployeByDepartmentId(DepartmentID)(employeesDispatch);
    setclickedButton(true);
  };

  const handelPageChange = (page) => {
    setcurrentPage(page);
  };

  return (
    <>
      <Col lg={7} md={7}  className=" p-0 m-0">
        <div className="style-changpaa-ti border-bottom">
          Employee Department table
        </div>
        <Col lg={11} className="mt-3">
          {/* ============================= */}

          <Form.Group as={Row} controlId="exampleForm.SelectCustomSizeLg">
            <Form.Label column sm={3} className="lablel-color-side">
              {" "}
              select Department{" "}
            </Form.Label>
            <Col sm={9}>
              <InputGroup className="mb-3">
                <Form.Control
                  as="select"
                  custom
                  // value={courseId}
                  onChange={(changeEvent) => {
                    setDepartmentID(changeEvent.target.value);
                    // onChange();
                  }}
                >
                  <option value="">Select</option>

                  {getDepartment?.length != 0 &&
                    getDepartment != null &&
                    getDepartment?.map((element) => (
                      <option value={element.id}>{element.name}</option>
                    ))}
                </Form.Control>

                <InputGroup.Append>
                  <Button variant="light border" onClick={onChange}>
                    Get Employees
                  </Button>
                </InputGroup.Append>
              </InputGroup>

              {data?.length == 0 && data != null && clickedButton && (
                <Row className="justify-content-center mx-auto text-center">
                  <h5 className="text-info">
                    {" "}
                    No Employee available for this Department yet !!
                  </h5>
                </Row>
              )}
            </Col>
          </Form.Group>
          {/* ========================= */}
          <Row className="m-2">
            <Col lg={12}>
              {data?.length != 0 && (
                <TablesEmployeesDep employeeList={employeeList} />
              )}

              <Pagination
                itemsCount={data?.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handelPageChange}
              />
            </Col>
          </Row>
        </Col>
      </Col>
    </>
  );
};

export default EmployeesDep;
