import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="project--card">
      <div className="project--name">Login Page</div>
      <div className="project--description">
        This project creates a straightforward login page using Vue.js, HTML,
        CSS, and Bootstrap. It's designed to be user-friendly, with a clean and
        responsive interface for an uncomplicated frontend experience. Perfect
        for quick integration and frontend-focused projects.
      </div>
      <div className="project--tech">
        <i className="fa-brands fa-vuejs fa-xl"></i>
        <i className="fa-brands fa-html5 fa-xl"></i>
        <i className="fa-brands fa-css3-alt fa-xl"></i>
        <i className="fa-brands fa-bootstrap fa-xl"></i>
      </div>
      <button type="button" class="btn btn-outline-dark code--here">
        <i class="fa-brands fa-github"></i>
        <span style={{ marginLeft: "5px" }}>Link to GitHub repo</span>
      </button>
    </div>
  );
};

export default ProjectCard;
