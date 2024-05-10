import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import softwareEngineerImage from '../assets/images/se_image.jpg';
import techImage from '../assets/images/techImage.png';
import softwareArchImg from '../assets/images/softwareArchImg.png';
import webDevImg from '../assets/images/webDev.png';
import innovation from '../assets/images/innovation.jpg';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>
                Welcome!
              </h2>
              <p>My ideal job as a passionate technologist would involve working on challenging projects with cutting-edge technologies, collaborating with a diverse and supportive team, and having opportunities to explore innovative solutions, all while making a positive impact on society.</p>
              <Carousel responsive={responsive} infinite={true} className='skill-slider'>
              <div className='item'>
                  <img src={softwareEngineerImage} alt="image" style={{borderRadius: '30%'}} />
                  <h5>Software Engineer</h5>
                </div>
                <div className='item'>
                  <img src={techImage} alt="image" style={{borderRadius: '30%'}}/>
                  <h5>Technologist</h5>
                </div>
                <div className='item'>
                  <img src={softwareArchImg} alt="image" style={{borderRadius: '30%'}} />
                  <h5>Architect</h5>
                </div>
                <div className='item'>
                  <img src={webDevImg} alt="image" style={{borderRadius: '30%'}} />
                  <h5>Web Developer</h5>
                </div>
                <div className='item'>
                  <img src={innovation} alt="image" style={{borderRadius: '30%'}} />
                  <h5>Innovator</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;