import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/forth project.jpg";
import projImg2 from "../assets/img/second work.jpg";
import projImg3 from "../assets/img/project1.jpg";
import projImg4 from "../assets/img/first work.jpg";
import projImg5 from "../assets/img/fifth work.jpg";
import projImg6 from "../assets/img/12345.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title:"Netflix Clone",
      projectLink: "https://syamnetflix.ccbp.tech/login",
      imgUrl: projImg1,
    },
    {
      title:"Emoji Game",
      projectLink: "https://syamemojigame.ccbp.tech/",
      imgUrl: projImg5,
    },
    {
      title:"E-Commerce Cloth Store",
      projectLink: "https://syamecom.ccbp.tech/login",
      imgUrl: projImg4,
    },
    {
      title:"Prime-Video Clone",
      projectLink: "https://syamprimeclone.netlify.app/",
      imgUrl: projImg6,
    },
    {
      title:"Backend OTP Verfication",
      projectLink: "https://form-otp-verification-node-react-js-syam-narendra.vercel.app/",
      imgUrl: projImg2,
    },
    {
      title:"Money Management Dashboard",
      projectLink: "https://money-matters-pin-scale-assignment-syam-narendra.vercel.app/",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
                <h2>Projects</h2>
                <p>I show you to all the big and small websites I have done so far</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        { projects.map((project, index) => <ProjectCard key={index} {...project} /> )}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="bg-right" src={colorSharp2} />
    </section>
  )
}
