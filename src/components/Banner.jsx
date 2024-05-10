import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import headerImg from '../assets/images/header-image.jpg';
import Image from 'react-bootstrap/Image';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Technologist", "Software Engineer", "Web Developer"];
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updateText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker)};
  }, [text]);

  return (
    <section className='banner' id="home"> 
      <Container >
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to Michael's portfolio</span>
            <h1>{`Hi! I'm Michael `}</h1><span className='wrap'>{text}</span>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <Image src={headerImg} fluid rounded/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;