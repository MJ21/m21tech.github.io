import { useState } from "react";
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import avatar from "../assets/images/avatar-person.png";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");
  //   let response = await fetch("http://localhost:5000/contact", {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "Application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(formDetails),
  //   });
  //   setButtonText("Send");
  //   let result = response.json();
  //   setFormDetails(formInitialDetails);
  //   if (result.code === 200) {
  //     setStatus({ success: true, message: "Message sent successfully"});
  //   } else {
  //     setStatus({ success: false, message: "Error: Message not sent. Please try again."});
  //   }
  // }

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
            
            {/* <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea 
                  row='6' 
                  value={formDetails.message}
                  placeholder="Message"
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
                {
                  status.message &&
                  <Col>
                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                  </Col>
                }
              </Row>
            </form> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
