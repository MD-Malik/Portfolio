import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TravelWebsite from "../../Assets/Projects/TravelWebsite.png";
import Ecommerce from "../../Assets/Projects/ecommerce.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TravelWebsite}
              isBlog={false}
              title="Travel Website"
              description="Adventures is the go-to source for information on adventure travel that prioritizes sustainability, serves as a force for good, and transforms people and places."
              link="https://travel-adventure-shahrukh.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="Ecommerce Website"
              description="This Project is the clone of ecommerce health and wellnes Website netmeds.com build with HTML5, CSS3, and JavaScript."
              link="https://netmeds-ecommerce.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;