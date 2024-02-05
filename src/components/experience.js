import React from "react";
import ExperienceCard from "./experienceCard";
const Experience = () => {
    const experiences = [
      {
        name: "Vivada",
        role: "Full Stack Developer",
        isIntership: true,
        duration: "2023 - Present",
        responsbilities: [
          "Developing interactive and dynamic web applications using Angular.",
          "Creating robust and efficient APIs to facilitate communication between frontend and backend.",
          "Developing server-side logic.",
          " Assigning tasks to team members based on their skills and project requirements.",
        ],
        technologies: [
          "Angular",
          "Django",
          "JavaScript",
          "HTML",
          "CSS",
          "Tailwind CSS",
          "PostgreSQl",
          "Docker",
          "Git",
          "GitHub",
        ],
      },
      {
        name: "MTREE TECH SOLUTIONS",
        role: "Data Analyst",
        isIntership: true,
        duration: "Mar 2023 - May 2023",
        responsbilities: [
            "Cleaning and transforming data using PowerBI",
            "Analysing realtime GPS data using Power BI and Python",
            "creating Dashboards using PowerBI",
            "Writing Code in HTML, CSS, Javascript",
            "Worked in Web Development team and created website using HTML, CSS, Bootstrap & Javascript for clients",
        ],
        technologies: [
            "python",
            "HTML",
            "CSS",
            "Bootstrap",
            "PowerBI",
        ],
      }
    ];

    return (
      <div className="experience--container">
        <h3 className="experience--heading">Work Experience</h3>
        <div className="experiences d-flex flex-row gap-5">
          {experiences.map((experience) => (
            <ExperienceCard experience={experience} />
          ))}
        </div>
      </div>
    );
}

export default Experience