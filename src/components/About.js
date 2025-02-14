import React from "react";
import "./About.css"; 

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm <strong>Sanskriti</strong>, an aspiring <span className="highlight">Full Stack Developer</span> from Vellore Institute of technology.  
            I thrive at the intersection of  <span className="highlight">technology and development</span>, leveraging my expertise 
            in problem-solving, leadership, and strategic thinking to create impact-driven solutions.  
          </p>
          <p>
            I have experience working on  <span className="highlight">React, tailwind, css, html and javascript</span>,  
            and I'm currently exploring "APIs".
            My goal is to develop myself into a sucessful  <span className="highlight">full stack developer</span>, driving innovation 
            and meaningful change.
          </p>
          <a href="assets/Abey_Resume_Template (1).pdf" className="btn">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default About;
