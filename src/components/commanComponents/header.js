import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Navbar, NavDropdown, Nav, Col, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../../assets/css/headerStyle.css";
import logout from "../../context/actions/authantication/logout";

const Header = () => {
  const tokenKey = "token";
  const [authenticated, setauthenticated] = useState(false);
  const { pathname } = useLocation();

  const handelUserLogout = () => {
    logout();
    setauthenticated(false);
  };
  const [current, setcurrent] = useState("0");

  useEffect(() => {
    const authed = localStorage.getItem(tokenKey);

    if (authed != null && authed != "") {
      setauthenticated(true);
    } else {
      setauthenticated(false);
    }
  }, []);

  return (
    <div className="grid-header shdow border">
      <Navbar collapseOnSelect expand="lg" variant="white">
        <Navbar.Brand
          href="#"
          as={Col}
          className="ml-lg-4 pr-lg-5 mr-lg-5 p-sm-0 m-sm-0"
        >
          <span className="history-style mb-2">
            +966 (1) 4722277| A Leading IT Services Provider in the MENA Region
          </span>
          <div className="">
            <Nav.Link href="/">
              {" "}
              <img
                src="/img/logo2.jpg"
                height="50"
                className="d-inline-block align-top ml-md-4"
                alt="Tem Logo"
              />
            </Nav.Link>{" "}
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {authenticated && (
              <Button
                onClick={handelUserLogout}
                variant="outline-dark buttonRounded px-3 mr-lg-2"
              >
                Log Out
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
