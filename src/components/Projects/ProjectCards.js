import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div style={{display:"grid", gridTemplateColumns:"auto auto", gap:"30px"}}>
        <Button variant="primary" href={props.link1} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
        <Button variant="primary" href={props.link2} target="_blank" >
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Git Repo"}
        </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
