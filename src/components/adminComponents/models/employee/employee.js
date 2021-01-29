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
import Pagination from "./../../../commanComponents/pagination";
import { paginate } from "./../../../../units/paginate";
import TablesEmployees from "./tablesEmployee";
import SearchBox from "./../../../commanComponents/searchBox";

const Employees = () => {
  const { getRolesAttributes } = useContext(GeneralContext);
  const { getRoles, setGetRoles } = getRolesAttributes();
  const { getDepartmentAttributes } = useContext(GeneralContext);
  const { getDepartment } = getDepartmentAttributes();
  const { getMangerAttributes } = useContext(GeneralContext);
  const { getManger } = getMangerAttributes();
  const history = useHistory();
  const [currentPage, setcurrentPage] = useState(1);
  const [searchQuery, setsearchQuery] = useState("");

  const pageSize = 2;
  const {
    employeesDispatch,
    employeesState: {
      employees: { loading, error, data },
    },
  } = useContext(GlobalContext);
  let employeeList;
  if (data?.length != 0) {
    employeeList = paginate(data, pageSize, currentPage);
  }

  const handelPageChange = (page) => {
    setcurrentPage(page);
  };
  const handelDeletEmployee = (ID) => {
    deleteEmployee(ID)(employeesDispatch);
  };
  const handleSearch = (query) => {
    setsearchQuery(query);
    setcurrentPage(1);
  };
  let filtered = employeeList;
  if (searchQuery.length > 1 && employeeList)
    filtered = employeeList?.filter((m) =>
      m.employee_name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  return (
    <>
      <Col lg={7} md={7}  className=" p-0 m-0">
        <div className="style-changpaa-ti border-bottom">Employee</div>
        <Col lg={11} className="mt-3">
          <Link to="admin/addemployees">
            {" "}
            <Button variant="success" className="m-2 px-4">
              {" "}
              + Add New{" "}
            </Button>
          </Link>
          <Row className="m-2">
            <Col lg={12} sm={12} md={12}>
              <SearchBox value={searchQuery} onChange={handleSearch} />
              <TablesEmployees employeeList={filtered} />

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

export default Employees;
