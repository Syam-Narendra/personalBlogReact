import { Container, Row, Col } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
import logo from "../assets/img/odina2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/syamnarendra/" target="blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/syam-narendra" target="blank"><img src="https://img.icons8.com/ios-glyphs/480/github.png" alt="Icon" /></a>
              <a href="https://www.instagram.com/syam.py/" target="blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
