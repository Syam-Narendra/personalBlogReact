import { Col } from "react-bootstrap";
import {AiOutlineLink} from "react-icons/ai"
export const ProjectCard = ({ title, projectLink, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project-card" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a target="blank" className="telegram-link-text" href={projectLink}><AiOutlineLink/>Visit Deployment</a>
        </div>
      </div>
    </Col>
  )
}
