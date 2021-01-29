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
import { GlobalContext } from "../../../../context/Provider";
import Footer from "../../../commanComponents/footer";

import Header from "../../../commanComponents/header";
import editEmployee from "../../../../context/actions/employees/editEmployee";
import clearEditEmployee from "../../../../context/actions/employees/clearEditEmployee";
import { GeneralContext } from "../../../../context/generalContext";
const EditEmployee = () => {
  const history = useHistory();
  const { getEditEmployeeAttributes } = useContext(GeneralContext);
  const {
    attributesSetterEmployee,
    attributesValueEmployee,
  } = getEditEmployeeAttributes();

  const {
    employeesDispatch,
    employeesState: {
      editemployee: { loading, error, data },
    },
  } = useContext(GlobalContext);

  const [form, setForm] = useState({});
  const [name, setname] = useState({});
  const [desc, setdescr] = useState({});
  const formValid = !name?.length || !desc?.length;
  const onChange = (e) => {
    setForm({
      employeeid: attributesValueEmployee.editEmployeeform.id,
      name: name,
      description: desc,
    });
  };

  useEffect(() => {
    if (data) {
      attributesValueEmployee.editEmployeeform("");

      window.location.pathname = "/admin";
    } //to not to load this when ever go back to this page
    return () => {
      clearEditEmployee()(employeesDispatch);
    };
  }, [data]);

  const onSubmit = () => {
    editEmployee(form)(employeesDispatch);
  };

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
                          defaultValue={
                            attributesValueEmployee.editEmployeeform.name
                          }
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
                        Description
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="text"
                          defaultValue={
                            attributesValueEmployee.editEmployeeform.obj
                          }
                          onChange={(e) => {
                            setdescr(e.target.value);
                            onChange();
                          }}
                          onBlur={onChange}
                          placeholder="  Description"
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
                          Edit Employee
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

export default EditEmployee;
