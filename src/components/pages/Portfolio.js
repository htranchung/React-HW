import React from 'react';
import Target from '../../images/Target.png';
import Pupper from '../../images/Pupper.png';
import PortfolioPic from '../../images/Portfolio.png';

function Portfolio() {
  // links to my portfolio projects to the github repo
  return (
    <div className="container projectContainer">
      <h1>Portfolio</h1>
      <p>Here are some of my recent projects:</p>
      <a href="https://github.com/htranchung/Target-Application"><img src={Target} alt="Project 1" /></a>
      <a href="https://example.com/project2"><img src={Pupper} alt="Project 2" /></a>
      <a href="https://example.com/project3"><img src={PortfolioPic} alt="Project 3" /></a>
    </div>
  );
}

export default Portfolio;
