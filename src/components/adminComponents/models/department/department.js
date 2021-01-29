import React, { useEffect, useState } from "react";
import { Row, Table, Button, Col, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../../assets/css/tableStyle.css";
import { GlobalContext } from "../../../../context/Provider";

import deleteDepartment from "../../../../context/actions/department/deleteDepartment";
import { GeneralContext } from "../../../../context/generalContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { paginate } from "./../../../../units/paginate";
import TablesDepartment from "./tablesDepartment";
import Pagination from "./../../../commanComponents/pagination";
import SearchBox from "./../../../commanComponents/searchBox";
const Department = () => {
  const history = useHistory();

  const { getDepartmentAttributes } = useContext(GeneralContext);
  const { getDepartment } = getDepartmentAttributes();
  const { getMangerAttributes } = useContext(GeneralContext);
  const { getManger } = getMangerAttributes();
  const [searchQuery, setsearchQuery] = useState("");
  const [currentPage, setcurrentPage] = useState(1);
  const pageSize = 2;
  const handelPageChange = (page) => {
    setcurrentPage(page);
  };
  const {
    departmentsDispatch,
    departmentsState: {
      departments: { loadingDepartment, errorDepartment, dataDepartment },
    },
  } = useContext(GlobalContext);

  let dataDepartmentList;
  if (dataDepartment?.length != 0) {
    dataDepartmentList = paginate(dataDepartment, pageSize, currentPage);
  }

  const handelDeletDepartment = (ID) => {
    deleteDepartment(ID)(departmentsDispatch);
  };
  const handleSearch = (query) => {
    setsearchQuery(query);
    setcurrentPage(1);
  };
  let filtered = dataDepartmentList;
  if (searchQuery.length > 1 && dataDepartment)
    filtered = dataDepartmentList?.filter((m) =>
      m.department_name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  return (
    <Col lg={7} className=" p-0 m-0">
      <div className="style-changpaa-ti border-bottom">Departments</div>
      <Col lg={11}>
        <Link to="/admin/adddepartments">
          {" "}
          <Button variant="success" className="m-2 px-4">
            {" "}
            + Add New{" "}
          </Button>
        </Link>

        <Row>
          {dataDepartment?.length != 0 && dataDepartment?.length != null && (
            <Col lg={12}>
              <SearchBox value={searchQuery} onChange={handleSearch} />
              <TablesDepartment dataDepartmentList={filtered} />
              <Pagination
                itemsCount={dataDepartment?.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handelPageChange}
              />
            </Col>
          )}

          {errorDepartment && (
            <div colSpan="5" className="row justify-content-center">
              <div className="alert alert-danger" role="alert">
                {errorDepartment}
              </div>
            </div>
          )}
        </Row>
      </Col>
    </Col>
  );
};

export default Department;
