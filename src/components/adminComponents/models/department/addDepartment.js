import React, { useEffect, useState } from "react";
import { Row, Spinner, Button, Col, Form, Container } from "react-bootstrap";
import Footer from "../../../commanComponents/footer";

import Header from "../../../commanComponents/header";
import { GlobalContext } from "../../../../context/Provider";

import clearCreateDepartment from "../../../../context/actions/department/clearCreateDepartment";

import { GeneralContext } from "../../../../context/generalContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import getAllDepartments from "../../../../context/actions/department/getAllDepartments";
import addDepartment from "../../../../context/actions/department/addDepartment";

const AddDepartment = () => {
  const { getMangerAttributes } = useContext(GeneralContext);
  const { getManger } = getMangerAttributes();

  const {
    departmentsDispatch,
    departmentsState: {
      adddepartment: { loadingDepartment, errorDepartment, dataDepartment },
    },
  } = useContext(GlobalContext);

  const [departmentName, setdepartmentName] = useState({});

  const [employeeId, setemployeeId] = useState({});
  const [form, setform] = useState({});

  const history = useHistory();
  const onCheckOut = (e) => {
    setform({ departmentName: departmentName, employeeId: employeeId });
  };
  const onSubmit = () => {
    onCheckOut();

    addDepartment(form)(departmentsDispatch);
  };

  useEffect(() => {
    if (dataDepartment != null) {
      window.location.pathname = "/admin";
    }
    //to not to load this when ever go back to this page
    return () => {
      clearCreateDepartment()(departmentsDispatch);
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
                        onChange={(changeEvent) => {
                          setdepartmentName(changeEvent.target.value);
                        }}
                        onBlur={onCheckOut}
                      />
                    </Col>
                  </Form.Group>

                  {/* ============================= */}

                  <Form.Group
                    as={Row}
                    controlId="exampleForm.SelectCustomSizeLg"
                  >
                    <Form.Label column sm={3} className="lablel-color-side">
                      {" "}
                      select DirectManager{" "}
                    </Form.Label>
                    <Col sm={8}>
                      {" "}
                      <Form.Control
                        as="select"
                        custom
                        // value={courseId}
                        onChange={(changeEvent) => {
                          setemployeeId(changeEvent.target.value);
                          // onChange();
                        }}
                        onBlur={onCheckOut}
                      >
                        <option value="">Select</option>

                        {getManger?.length != 0 &&
                          getManger?.map((element) => (
                            <option value={element.EmployeeID}>
                              {element.employee_name}
                            </option>
                          ))}
                      </Form.Control>
                    </Col>
                  </Form.Group>
                  {/* ========================= */}

                  <Form.Group as={Row}>
                    <Col sm={{ span: 8, offset: 3 }}>
                      <Button
                        // variant="danger"
                        size="lg"
                        block
                        className="app-backcolor-blue mt-2"
                        disabled={formValid}
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
                        )}
                        Add Department
                      </Button>
                    </Col>
                  </Form.Group>
                  {errorDepartment && (
                    <Col sm={{ span: 8, offset: 3 }} className="p-0">
                      {" "}
                      <div className="alert alert-danger" role="alert"></div>
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

export default AddDepartment;
