import React from "react";

const ProjectCard = (props) => {
  console.log(props);
  return (
    <div className="project--card">
      <div className="project--name">{props.project.name}</div>
      <div className="project--description">
        <p>{props.project.description}</p>
      </div>
      <div className="project--tech">
        {/* <i className="fa-brands fa-vuejs fa-xl"></i>
        <i className="fa-brands fa-html5 fa-xl"></i>
        <i className="fa-brands fa-css3-alt fa-xl"></i>
        <i className="fa-brands fa-bootstrap fa-xl"></i> */}
        {props.project.tech.map((tech) => (
          <i className={tech}></i>
        ))}
      </div>
      <button type="button" class="btn btn-outline-dark code--here">
        <i class="fa-brands fa-github"></i>
        <span style={{ marginLeft: "5px" }}>
          <a href={props.project.link}>Link to GitHub repo</a>
        </span>
      </button>
      {props.project.deployedAt && (
        <button type="button" className="btn btn-outline-dark code--here">
          <span style={{ marginLeft: "2px" }}>
            <a href={props.project.deployedAt}>Link to deployed app</a>
          </span>
        </button>
      )}
    </div>
  );
};

export default ProjectCard;
