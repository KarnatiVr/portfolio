import React from "react";
import SkillCard from "./skillCard";

const Skills = () => {
      const frontend = [
        "fa-brands fa-html5 fa-2xl",
        "fa-brands fa-css3-alt fa-2xl",
        "fa-brands fa-js fa-2xl",
        "fa-brands fa-angular fa-2xl",
        "fa-brands fa-react fa-2xl",
      ];
      const backend = [
        "fa-brands fa-node fa-2xl",
        "fa-brands fa-python fa-2xl",
        "fa-brands fa-docker fa-2xl",
        "fa-brands fa-c fa-2xl",
        "fa-brands fa-git fa-2xl",
      ];
  return (
    <div className="skills--container" >
      <h2 className="skill-heading" >Skills</h2>
      <div className="skills">
        {/* <h5 className="skill--title">Frontend</h5> */}
        <ul className="skill--list">
          {frontend.map((tech) => (
            <SkillCard skill={tech} />
          ))}
        </ul>
        {/* <h5 className="skill--title">Backend</h5> */}
        <ul className="skill--list">
          {backend.map((tech) => (
            <SkillCard skill={tech} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
