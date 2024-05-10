import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from '../assets/images/adTech2.jpeg';
import projImg2 from '../assets/images/zelleImg.png';
import projImg3 from '../assets/images/awsImg.png';
import projImg4 from '../assets/images/java1.png';
import projImg5 from '../assets/images/cybersecurity.jpg';
import projDeepLearning from '../assets/images/deep_learning_certificate.png';
import projImgEducation from '../assets/images/code4all_web.png';

const Projects = () => {
  const projects = [
    {
      title: "Full Stack Experience",
      description: "Feature development from design to deployment",
      imgUrl: projImg1,
    },
    {
      title: "Enterprise Application Experience",
      description: "Projects: Zelle & Control Tower",
      imgUrl: projImg2,
    },
    {
      title: "Aws Web Services",
      description: "Cloud Experience",
      imgUrl: projImg3,
    },
    {
      title: "Experienced Java Developer",
      description: "Java 8 to 22",
      imgUrl: projImg4,
    },
    {
      title: "Application Security",
      description: "Authn, Authz, JWT",
      imgUrl: projImg5,
    },
  ];
  return (
    <section className="project" id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Work Experience</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Personal Work</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Technical Educator</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard 
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Row>
                    <ProjectCard title={'Deep Learning'} description={"DeepLearning.AI certificate"} imgUrl={projDeepLearning} />
                    <p>Built and trained deep neural networks while identifying key architecture parameters and implemented vectorized neural networks and deep learning to applications.</p>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    <ProjectCard title={'Technical Educational Videos'} description={'A place to learn Java programming'} imgUrl={projImgEducation} />
                    <p>This series of java educational videos are for beginner, intermediate, or advanced level java programmers.</p>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
