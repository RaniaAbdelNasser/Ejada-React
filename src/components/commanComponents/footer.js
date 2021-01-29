import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

function Footer() {
  return (
    <div className="grid-footer">
      <Container fluid className="footerStyle black-background px-5 py-3">
        <Row>
          <div className="mx-auto justify-content-center mt-3">
            <a target="_blank" href="#">
              {" "}
              <img
                src="/img/facebook.png"
                height="20"
                className="d-inline-block align-top ml-4"
                alt="Tem Logo"
              />
            </a>
            <a target="_blank" href="#">
              <img
                src="/img/whatsapp.png"
                height="20"
                className="d-inline-block align-top ml-4"
                alt=" Logo"
              />
            </a>{" "}
            <a target="_blank" href="#">
              <img
                src="/img/insta.png"
                height="20"
                className="d-inline-block align-top ml-4"
                alt="Tem Logo"
              />
            </a>
            <img
              src="/img/email.png"
              height="20"
              className="d-inline-block align-top ml-4"
              alt="email"
            />
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
