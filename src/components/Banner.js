import { Container, Row, Col } from "react-bootstrap";
import bannerImage from "../assets/img/hover-image.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`Hi! I'm Syam Narendra`} <br/><span className="tagline wrap">Full Stack Developer</span></h1>
                <p>Highly skilled and motivated full-stack developer, Experience in creating web applications from concept to deployment. I have a passion for both front-end and back-end development, and I thrive in dynamic, collaborative environments.</p>
                  <a className="lets-connect-anchor" href="#connect">Let’s Connect <ArrowRightCircle size={25}/></a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={bannerImage} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
