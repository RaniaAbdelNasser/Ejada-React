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
import "../../assets/css/registerStyle.css";
import { GlobalContext } from './../../context/Provider';
import logIn from '../../context/actions/authantication/logIn';
import { register } from './../../serviceWorker';
function LoginContainer() {
  const {
    authDispatch,
    authState: {
      logIn: { loading, error,data },
    },
  } = useContext(GlobalContext);
  const [email, setemail] = useState({});

  const [password, setpassword] = useState({});

  const [form, setform] = useState({});

  const onChange = (e) => {
    setform({ email: email, password: password });

  }; 
  useEffect(() => {
    if (data) { 
      window.location.pathname="/admin";
    }
    //to not to load this when ever go back to this page
 
  }, [data]);

  const onSubmit = () => {
    logIn(form)(authDispatch);
  };
  const formValid = !email?.length || !password?.length;

    return (
      <div className="grid-container registerBackGroundColor">
      <div className="grid-body">
        <main role="main" className="container-fluid p-0 m-0">
          <div className="row p-5 mx-auto  justify-content-center">
           
            <div className="col-lg-5 col-sm-12 card shadow bg-white">
              <div className="row px-5 pt-5 pb-3  mx-auto justify-content-center">
               
                <img src="/img/logo.jpg" className="small-logo d-block"/>
                
               
              </div>
              <div className="row  mx-auto justify-content-center">
              <div className="title1">Login to your account</div>
              </div>
              <div className="row px-5 ">

           
             
                  <div className="col-md-12">
                 
                  <Form className="mt-4 p-5 justify-content-center ">
                  <div className="justify-content-center ">
                    <Form.Group as={Row} controlId="formHorizontalFirstName">
                      <Form.Label column sm={12} md={4} className="lablel-color-side">
                        Email
                      </Form.Label>
                      <Col sm={12} md={8}>
                        <Form.Control
                          type="email"
                          onChange={(changeEvent) => {
                            setemail(changeEvent.target.value);
                          }}
                          onBlur={onChange}
                          placeholder="ex. email@email"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalLastName">
                      <Form.Label column sm={12} md={4} className="lablel-color-side">
                        password
                      </Form.Label>
                      <Col sm={12} md={8}>
                        <Form.Control
                          type="password"
                          onChange={(e) => {
                            setpassword(e.target.value);
                          }}
                          onBlur={onChange}
                          placeholder="*******"
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                      <Col sm={{ span: 8, offset: 4 }}>
                   
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
                          LogIn
                        </Button>
                     
                      </Col>
                    </Form.Group>
                    {error && (
                      <Col sm={{ span: 8, offset: 4 }} className="pl-2">
                        {" "}
                        <div className="alert alert-danger" role="alert">
                          {error}
                        </div>
                      </Col>
                    )}
                  </div>
                </Form>
               
               
                  
                
                  
                 
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    );
}

export default LoginContainer
