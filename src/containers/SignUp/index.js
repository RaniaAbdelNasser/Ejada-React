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

import { GlobalContext } from "./../../context/Provider";
import signUp from "../../context/actions/authantication/signUp";
function SignUpContainer() {
  const {
    authDispatch,
    authState: {
      signUp: { loading, error, data },
    },
  } = useContext(GlobalContext);
  const [fName, setfName] = useState({});
  const [lName, setlName] = useState({});
  const [email, setemail] = useState({});

  const [password, setpassword] = useState({});
  const [phone, setphone] = useState({});
  const [agree, setAgreement] = useState(false);
  const [form, setform] = useState({});
  const [fNameError, setfNameError] = useState("");
  const [lNameError, setlNameError] = useState("");
  const [emailError, setemailError] = useState("");
  const [phoneError, setphoneError] = useState("");
  useEffect(() => {
    if (data) { 
      window.location.pathname="/login";
    }
    //to not to load this when ever go back to this page
 
  }, [data]);
  const onLnameBlur=(e)=>{
if(lName.length<3){
  setlNameError("Please Enter at least 3 letters");
}
if(lName.length>=3){
  setlNameError("");
}

  }


  const onFnameBlur=(e)=>{
    if(fName.length<3){
      setfNameError("Please Enter at least 3 letters");
    }
    if(fName.length>=3){
      setfNameError("");
    }
    
      }

      const mailValidationFunction = () => {
        const regexMail = RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$');
        if (regexMail.test(email)) {
          setemailError("");
        } else {
         
          setemailError("Please Enter valid email");
        }
      };

      const phoneValidationFunction = () => {
        const regexPhone = RegExp('^(0)([0-9]{10})$');
        if (regexPhone.test(phone)) {
          setphoneError("");
        } else {
          setphoneError("Please Enter valid phone");
         
        }
      };
     
  const onChange = (e) => {

    setform({
      fName: fName,
      lName: lName,
      email: email,
      password: password,
      phoneNum: phone,
    });
  };
  const onSubmit = () => {
    signUp(form)(authDispatch);
  };
  const formValid =
    !(emailError?.length==0) ||
    !password?.length ||
    !(fName?.length>=3) ||
    !(lName?.length>=3) ||
    !(phoneError?.length==0)
    || !agree;

  return (
    <div className="grid-container registerBackGroundColor">
      <div className="grid-body">
        <main role="main" className="container-fluid p-0 m-0">
          <div className="row p-0 m-0">
            <div className="col-lg-7 p-0 col-sm-12 col-1-image">
              <div className="row p-2 pt-3 justify-content-left text-welcome ml-4">
                <span className="pt-0">Welcome to our Family...</span>
              </div>
              <div className="row m-0 logo-white pl-3">
                <img src="/img/logo.png" width="250" height="150" className=" " />
              </div>
            </div>
            <div className="col-lg-5 col-sm-12">
              <div className="row px-5 pt-5 pb-3 ">
                <div className="title1">Sign Up</div>
              </div>
              <div className="row px-5 ">
                {/* <form name="user" accept-charset="UTF-8" th:action="@{/signup}" method="POST"> */}
                <div className="col-md-12">
                  <Form className="mt-4 p-5 justify-content-center ">
                    <div className="justify-content-center ">
                      <Form.Group as={Row} controlId="formHorizontalLastName">
                        <Form.Label column sm={3} className="col-form-label lablel-color-auth">
                          First Name
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            onChange={(e) => {
                              setfName(e.target.value);
                             
                            }}
                            onBlur={()=>{onChange(); onFnameBlur();}}
                            placeholder="First Name"
                           
                          /> 
                        
                        </Col>
                      </Form.Group>
                      {fNameError.length!=0 &&  <div className="alert alert-danger" role="alert">
                          {fNameError}
                        </div>}
                      <Form.Group as={Row} controlId="formHorizontalLastName">
                        <Form.Label column sm={3} className="col-form-label lablel-color-auth">
                          Last Name
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            onChange={(e) => {
                              setlName(e.target.value);
                            }}
                            onBlur={()=>{onChange(); onLnameBlur();}}
                            placeholder="Last Name"
                          
                            
                          />
                        </Col>
                      
                      </Form.Group>
                      {lNameError.length!=0 &&  <div className="alert alert-danger" role="alert">
                          {lNameError}
                        </div>}
                      <Form.Group as={Row} controlId="formHorizontalFirstName">
                        <Form.Label column sm={3} className="col-form-label lablel-color-auth">
                          Email
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="email"
                            onChange={(changeEvent) => {
                              setemail(changeEvent.target.value);
                            }}
                            onBlur={()=>{onChange();mailValidationFunction();}}
                            placeholder="ex. email@email"
                          />
                        </Col>
                      </Form.Group>
                      {emailError.length!=0 &&  <div className="alert alert-danger" role="alert">
                          {emailError}
                        </div>}
                      <Form.Group as={Row} controlId="formHorizontalLastName">
                        <Form.Label column sm={3} className="col-form-label lablel-color-auth">
                          password
                        </Form.Label>
                        <Col sm={8}>
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

                      <Form.Group as={Row} controlId="formHorizontalFirstName">
                        <Form.Label column sm={3} className="col-form-label lablel-color-auth">
                          Phone
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            onChange={(changeEvent) => {
                              setphone(changeEvent.target.value);
                            }}
                            onBlur={()=>{onChange();phoneValidationFunction();}}
                            placeholder="01x xxx xxx xx"
                          />
                        </Col>
                      </Form.Group>
                      {phoneError.length!=0 &&  <div className="alert alert-danger" role="alert">
                          {phoneError}
                          </div>}
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check
                          type="checkbox"
                          label="I agree to The Terms of User"
                          onChange={() => setAgreement(!agree)}
                        />
                      </Form.Group>

                      <Form.Group as={Row}>
                        <Col sm={{ span: 8, offset: 3 }}>
                          <Button
                            variant="danger"
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
                            SignUp
                          </Button>
                          <a href="/login">
                            {" "}
                            <button
                              className="btn btn-outline-secondary px-4 mt-2"
                              type="button"
                            >
                              LogIn
                            </button>
                          </a>
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

                  {/* 


                  <div className="form-group row ">
                    <label
                      for="firstName"
                      className="col-sm-3 col-form-label lablel-color-auth"
                      >First Name</label >
                    <div className="col-sm-9">
                      <input required="required" type="text" id="firstName" name="firstName" placeholder="first name"/>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label
                      for="lastName"
                      className="col-sm-3 col-form-label lablel-color-auth"
                      >Last Name</label
                    >
                    <div className="col-sm-9">
                      <input required="required" type="text" id="lastName" name="lastName" placeholder="last name"/> 
                    </div>
                  </div>

                  <div className="form-group row">
                    <label
                      for="email"
                      className="col-sm-3 col-form-label lablel-color-auth"
                      >Email</label>
                    <div className="col-sm-9">
                      <input required="required" type="email" id="email" name="email" placeholder="ex. email@email"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      for="password"
                      className="col-sm-3 lablel-color-auth col-form-label"
                      >Password</label>
                    <div className="col-sm-9">
                      <input required="required" type="password" id="password" name="password" placeholder="******"/>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label
                      for="mobile"
                      className="col-sm-3 lablel-color-auth col-form-label"
                      >Phone</label>
                    <div className="col-sm-9">
                      <input required="required" type="text" id="phoneNum" name="phoneNum" placeholder="01x xxx xxx xx"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-9">
                      <div className="form-check">
                        <input required="required"
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck1"
                        />
                        <label className="form-check-label lablel-color-auth" for="gridCheck1">
                          I agree to The Terms of User
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-offset-3 col-sm-9">
                       <div className="form-actions">
                          <button type="submit" className="btn btn-danger px-3 mr-4 mt-2">Sign up</button>
                      </div>


                    </div>
                  </div> */}
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SignUpContainer;
