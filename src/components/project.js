import React from "react";
import ProjectCard from "./projectCard";

const Project = () => {
  const projects = [
    {
      id: 1,
      name: "Login Page",
      description:
        "This project creates a straightforward login page using Vue.js, HTML,CSS, and Bootstrap. It's designed to be user-friendly, with a clean and responsive interface for an uncomplicated frontend experience. Perfect for quick integration and frontend-focused projects.",
      tech: [
        "fa-brands fa-vuejs fa-xl",
        "fa-brands fa-html5 fa-xl",
        "fa-brands fa-css3-alt fa-xl",
        "fa-brands fa-bootstrap fa-xl",
      ],
      link: "https://github.com/KarnatiVr/LoginPage",
    },
    {
      id: 2,
      name: "RestAPI-Authentication_authorization_JWT",
      description:
        "This is a Authentication & Authorization System with User Registration, Login, and JWT creation. Users register with a username, email, and password, ensuring secure storage through bcrypt. Upon login, a JSON Web Token is generated for subsequent secure interactions",
      tech: ["fa-brands fa-js fa-2xl", "fa-brands fa-node fa-2xl"],
      link: "https://github.com/KarnatiVr/RestAPI-Authentication_authorization_JWT",
    },
    {
      id: 3,
      name: "ToDoApp",
      description:
        "A straightforward ToDo app allowing users to effortlessly save, delete, and prioritize tasks for efficient organization and task management.",
      tech: [
        "fa-brands fa-html5 fa-2xl",
        "fa-brands fa-css3-alt fa-2xl",
        "fa-brands fa-js fa-2xl",
        "fa-brands fa-react fa-2xl",
      ],
      link: "https://github.com/KarnatiVr/Todo-react-app",
    },
    {
      id: 4,
      name: "Admin Dashboard",
      description:
        "Create an Admin Dashboard from November to December 2023, featuring a straightforward design fetching data from a URL. Enjoy inline editing, pagination, and convenient bulk deleting with a 'Select All' option for enhanced user control and management.",
      tech: [
        "fa-brands fa-html5 fa-2xl",
        "fa-brands fa-css3-alt fa-2xl",
        "fa-brands fa-js fa-2xl",
        "fa-brands fa-angular fa-2xl",
      ],
      link: "https://github.com/KarnatiVr/admin-dashboard",
      deployedAt:
        "https://656bf082745efd3a0573b706--soft-stroopwafel-6f3626.netlify.app/",
    },
  ];
  return (
    <div>
      <h3 className="project--heading">Projects</h3>
      <div className="project--container">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
