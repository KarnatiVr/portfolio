import React from "react";
import me from "../me.png";
const About = () => {
  return (
    <div className="about d-flex flex-col">
      <div className="image--item">
        <img src={me} alt="me"></img>
      </div>
      <div className="about--content">
        <div className="about--text">
          <h3>About me</h3>
          <p>
            I hold a Bachelor's degree in Electrical and Computer Engineering
            (ECE) and possess a profound passion for technology. My expertise
            lies in a wide array of programming languages and tools, including
            Python, JavaScript, Node.js, React.js ,Vue.js, HTML, CSS, and Python
            libraries such as Pandas, NumPy, and Matplotlib.
            <br />
            <br />
            My skill set extends to Bash scripting, version control using GIT,
            and Docker, all of which contribute to my holistic approach to
            software development.
          </p>
        </div>
        <button type="button" class="btn btn-outline-dark abt-btn">
          Contact me
        </button>
        <button type="button" class="btn btn-outline-dark abt-btn">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default About;
