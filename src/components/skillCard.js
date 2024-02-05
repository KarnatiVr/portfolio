import React from "react";

const SkillCard = (props) => {
  console.log(props);
  return (
    <div className="skill--card">
      <div className="skill--name">
        <i className={props.skill} style={{ color: "#006f94" }}></i>
      </div>
    </div>
  );
};

export default SkillCard;
