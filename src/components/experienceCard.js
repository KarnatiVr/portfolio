import React from "react";

const ExperienceCard = (props) => {
  return (
    <div className="experience--card">
      <div className="experience--name">
        <h3>{props.experience.role}</h3>
        {props.experience.isIntership && <div>Internship</div>}
        <div>{props.experience.duration}</div>
        <div>{props.experience.name}</div>
      </div>
      <div className="experience--description">
        <div className="responsibility mt-2">
          <h4>Responsibilities</h4>
          {props.experience.responsbilities.map((responsibility) => (
            <li>{responsibility}</li>
          ))}
        </div>
        <h4 className="mt-5">Skills I have learned here</h4>
        <div className="technologies mt-2 d-flex flex-row flex-wrap">
          {props.experience.technologies.map((technology) => (
            <li className="skill--tag">{technology}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
