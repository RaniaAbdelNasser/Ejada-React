import React, { useContext, useEffect, useState } from "react";
import { Row, Spinner, Button, Col, Form, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { GeneralContext } from "../../../../context/generalContext";

import { GlobalContext } from "../../../../context/Provider";
import Footer from "../../../commanComponents/footer";

import Header from "../../../commanComponents/header";
import editDepartment from "../../../../context/actions/department/editDepartment";
import clearEditDepartment from "../../../../context/actions/department/clearEditDepartment";

const EditDepartment = () => {
  const { getEditDepartmentAttributes } = useContext(GeneralContext);
  const {
    editDepartmentform,
    setEditDepartmentForm,
  } = getEditDepartmentAttributes();

  const {
    departmentsDispatch,
    departmentsState: {
      editdepartment: { loadingDepartment, errorDepartment, dataDepartment },
    },
  } = useContext(GlobalContext);
  const { getMangerAttributes } = useContext(GeneralContext);
  const { getManger } = getMangerAttributes();

  const [departmentName, setdepartmentName] = useState({});

  const [employeeId, setemployeeId] = useState({});

  const [departmentID, setdepartmentID] = useState({});
  const [form, setform] = useState({});

  const history = useHistory();
  const onCheckOut = (e) => {
    setform({
      DepartmentName: departmentName,
      DepartmentID: departmentID,
      EmployeeId: employeeId,
    });
  };
  const onSubmit = () => {
    onCheckOut();

    editDepartment(form)(departmentsDispatch);
  };

  useEffect(() => {
    if (dataDepartment != null) {
      window.location.pathname = "/admin";
    }
    //to not to load this when ever go back to this page
    return () => {
      setEditDepartmentForm("");
      clearEditDepartment()(departmentsDispatch);
    };
  }, [dataDepartment]);
  const formValid = !departmentName?.length || !employeeId?.length;

  return (
    <div className="grid-container">
      <Header />
      <div className="grid-body">
        <Container>
          <Row className="mx-auto justify-content-center">
            <Col lg={8} className=" p-0 m-0 justify-content-center">
              <div className="style-changpaa-ti border-bottom">
                New Department
              </div>

              <Form className="mt-4 p-3 justify-content-center mx-auto">
                <div className="justify-content-center mx-auto">
                  <Form.Group as={Row} controlId="formHorizontalFirstName">
                    <Form.Label column sm={3} className="lablel-color-side">
                      Name
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        defaultValue={departmentName}
                        onChange={(changeEvent) => {
                          setdepartmentName(changeEvent.target.value);
                        }}
                        onBlur={onCheckOut}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalLastName">
                    <Form.Label column sm={3} className="lablel-color-side">
                      num
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        defaultValue={departmentName}
                        placeholder="num"
                        onChange={(changeEvent) => {
                          setdepartmentName(changeEvent.target.value);
                        }}
                        onBlur={onCheckOut}
                      />
                    </Col>
                  </Form.Group>
                
                  <Form.Group as={Row}>
                    <Col sm={{ span: 8, offset: 3 }}>
                      <Button
                        variant="danger"
                        size="lg"
                        block
                        className=" mt-2"
                        disabled={formValid || loadingDepartment}
                        onClick={onSubmit}
                      >
                        {loadingDepartment && (
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                        )}{" "}
                        editdepartment
                      </Button>
                    </Col>
                  </Form.Group>
                  {errorDepartment && (
                    <Col sm={{ span: 8, offset: 3 }} className="p-0">
                      {" "}
                      <div className="alert alert-danger" role="alert">
                        {errorDepartment}
                      </div>
                    </Col>
                  )}
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default EditDepartment;
