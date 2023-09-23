import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ImLocation2 } from 'react-icons/im';
import {AiOutlineMail,AiOutlineLink} from "react-icons/ai"
import {LiaTelegramPlane} from "react-icons/lia"

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <div className="address-container">
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                    <ImLocation2 size={25}/>
                      <p>Rajahmundry,<br/>East Godavari Dist,<br/>Andhra Pradesh</p>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <AiOutlineMail/>
                      <p>syam35@protonmail.com</p>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <LiaTelegramPlane/><br/>
                      <a target="blank" className="telegram-link-text" href="https://t.me/MrAdbhutham"> <AiOutlineLink/> Text on Telegram</a>
                    </Col>
                  </Row>
                  </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
