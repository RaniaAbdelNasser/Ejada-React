import React, { useState, useContext, useEffect } from "react";
import {
  Row,
  Card,
  Button,
  Col,
  Form,
  Container,
  Spinner,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import addEmployee from "../../../../context/actions/employees/addEmployee";
import clearCreateEmployee from "../../../../context/actions/employees/clearCreateEmployee";
import { GlobalContext } from "../../../../context/Provider";
import Footer from "../../../commanComponents/footer";

import Header from "../../../commanComponents/header";
import { GeneralContext } from "./../../../../context/generalContext";

const AddEmployee = () => {
  const { getRolesAttributes } = useContext(GeneralContext);
  const { getRoles } = getRolesAttributes();
  const { getDepartmentAttributes } = useContext(GeneralContext);
  const { getDepartment } = getDepartmentAttributes();
  const { getMangerAttributes } = useContext(GeneralContext);
  const { getManger } = getMangerAttributes();

  const {
    employeesDispatch,
    employeesState: {
      addemployee: { loading, error, data },
    },
  } = useContext(GlobalContext);
  const [name, setname] = useState({});
  const [email, setemail] = useState({});
  const [age, setage] = useState({});
  const [phone, setphone] = useState({});
  const [RoleID, setRoleID] = useState({});
  const [DepartmentID, setDepartmentID] = useState({});
  const [DirectManager, setDirectManager] = useState({});
  const [emailError, setemailError] = useState("");
  const [phoneError, setphoneError] = useState("");
  const [ageError, setageError] = useState("");
  const [form, setform] = useState({});

  const history = useHistory();
  const onChange = (e) => {
    setform({
      employeeName: name,
      email: email,
      age: age,
      phone: phone,
      roleId: RoleID,
      departmentId: DepartmentID,
      directManger: DirectManager,
    });
  };
  const onSubmit = () => {
    addEmployee(form)(employeesDispatch);
  };

  useEffect(() => {
    if (data) {
      window.location.pathname = "/admin";
    }
    //to not to load this when ever go back to this page
    return () => {
      clearCreateEmployee()(employeesDispatch);
    };
  }, [data]);
  const onAgeBlur = (e) => {
    if (age.length >= 3) {
      setageError("Please Enter A real age");
    }
    if (age.length < 3) {
      setageError("");
    }
  };
  const mailValidationFunction = () => {
    const regexMail = RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$");
    if (regexMail.test(email)) {
      setemailError("");
    } else {
      setemailError("Please Enter valid email");
    }
  };

  const phoneValidationFunction = () => {
    const regexPhone = RegExp("^(0)([0-9]{10})$");
    if (regexPhone.test(phone)) {
      setphoneError("");
    } else {
      setphoneError("Please Enter valid phone");
    }
  };

  const formValid =
    !name?.length ||
    !(emailError?.length == 0) ||
    !(age?.length <= 2) ||
    !RoleID?.length ||
    !DirectManager?.length ||
    !DepartmentID?.length ||
    !RoleID?.length ||
    !(phoneError?.length == 0);
  return (
    <div className="grid-container">
      <Header />
      <div className="grid-body">
        <Container>
          <Row className="mx-auto justify-content-center">
            <Col lg={8} className=" p-0 m-0 justify-content-center">
              <Card className="m-2 card-color">
                <div className="style-changpaa-ti border-bottom">
                  New Employee
                </div>

                <Form className="mt-4 p-5 justify-content-center ">
                  <div className="justify-content-center ">
                    <Form.Group as={Row} controlId="formHorizontalFirstName">
                      <Form.Label column sm={3} className="lablel-color-side">
                        Name
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="text"
                          onChange={(changeEvent) => {
                            setname(changeEvent.target.value);
                          }}
                          onBlur={onChange}
                          placeholder="Name"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalLastName">
                      <Form.Label column sm={3} className="lablel-color-side">
                        email
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="email"
                          onChange={(e) => {
                            setemail(e.target.value);
                          }}
                          onBlur={() => {
                            onChange();
                            mailValidationFunction();
                          }}
                          placeholder="ex. email@email"
                        />
                        {emailError.length != 0 && (
                          <div className="alert mt-2 alert-danger" role="alert">
                            {emailError}
                          </div>
                        )}
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalLastName">
                      <Form.Label column sm={3} className="lablel-color-side">
                        phone
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="text"
                          onChange={(e) => {
                            setphone(e.target.value);
                          }}
                          onBlur={() => {
                            onChange();
                            phoneValidationFunction();
                          }}
                          placeholder="01x xxx xxx xx"
                        />
                        {phoneError.length != 0 && (
                          <div className="alert mt-2 alert-danger" role="alert">
                            {phoneError}
                          </div>
                        )}
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalLastName">
                      <Form.Label column sm={3} className="lablel-color-side">
                        age
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="number"
                          onChange={(e) => {
                            setage(e.target.value);
                          }}
                          onBlur={() => {
                            onChange();
                            onAgeBlur();
                          }}
                          maxLength={2}
                          placeholder="  age"
                        />
                        {ageError.length != 0 && (
                          <div className="alert mt-2 alert-danger" role="alert">
                            {ageError}
                          </div>
                        )}
                      </Col>
                    </Form.Group>
                    {/* ============================= */}

                    <Form.Group
                      as={Row}
                      controlId="exampleForm.SelectCustomSizeLg"
                    >
                      <Form.Label column sm={3} className="lablel-color-side">
                        {" "}
                        select Role{" "}
                      </Form.Label>
                      <Col sm={8}>
                        {" "}
                        <Form.Control
                          as="select"
                          custom
                          // value={courseId}
                          onChange={(changeEvent) => {
                            setRoleID(changeEvent.target.value);
                            // onChange();
                          }}
                          onBlur={onChange}
                        >
                          <option value="">Select</option>

                          {getRoles?.length != 0 &&
                            getRoles?.map((element) => (
                              <option value={element.id}>{element.name}</option>
                            ))}
                        </Form.Control>
                      </Col>
                    </Form.Group>
                    {/* ========================= */}

                    {/* ============================= */}

                    <Form.Group
                      as={Row}
                      controlId="exampleForm.SelectCustomSizeLg"
                    >
                      <Form.Label column sm={3} className="lablel-color-side">
                        {" "}
                        select Department{" "}
                      </Form.Label>
                      <Col sm={8}>
                        {" "}
                        <Form.Control
                          as="select"
                          custom
                          // value={courseId}
                          onChange={(changeEvent) => {
                            setDepartmentID(changeEvent.target.value);
                            // onChange();
                          }}
                          onBlur={onChange}
                        >
                          <option value="">Select</option>

                          {getDepartment?.length != 0 &&
                            getDepartment != null &&
                            getDepartment?.map((element) => (
                              <option value={element.id}>{element.name}</option>
                            ))}
                        </Form.Control>
                      </Col>
                    </Form.Group>
                    {/* ========================= */}
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
                            setDirectManager(changeEvent.target.value);
                            // onChange();
                          }}
                          onBlur={onChange}
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
                          className=" mt-2 app-backcolor-blue"
                          disabled={formValid || loading}
                          onClick={onSubmit}
                        >
                          {loading && (
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
                          )}
                          Add Employee
                        </Button>
                      </Col>
                    </Form.Group>
                    {error && (
                      <Col sm={{ span: 8, offset: 3 }} className="p-0">
                        {" "}
                        <div className="alert alert-danger" role="alert">
                          {error}
                        </div>
                      </Col>
                    )}
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default AddEmployee;
