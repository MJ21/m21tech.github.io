import { useState } from "react";
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import avatar from "../assets/images/avatar-person.png";

export const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        <Row>
          <Col>
            <img src={avatar} alt="Contact me!" />
          </Col>
          <Col md={6}>
            <h2>Get in touch</h2>
            <ListGroup defaultActiveKey="https://twitter.com/Code4all_">
              <ListGroup.Item action href="https://twitter.com/Code4all_">
                X.com
              </ListGroup.Item>
              <ListGroup.Item action href="https://github.com/MJ21">
                Github
              </ListGroup.Item>
              <ListGroup.Item action href="https://www.linkedin.com/in/michael-flath-45a547a1/">
                LinkedIn
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
