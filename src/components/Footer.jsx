import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/images/shield.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6} className="d-flex justify-content-start">
            <img
              src={logo}
              alt="logo"
              style={{ height: "80px", width: "80px" }}
            />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://twitter.com/Code4all_">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://github.com/MJ21">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/michael-flath-45a547a1/">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </Col>
          <p className="justify-content-center">Copyright 2024. All rights reserved. </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
