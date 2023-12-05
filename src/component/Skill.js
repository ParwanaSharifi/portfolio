import React, { useState } from 'react';
import './Skill.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaBootstrap } from 'react-icons/fa';

const Skill = () => {
  const [htmlSkill] = useState(90); //Initializing the HTML skill level to 90
  const [cssSkill] = useState(90); //Initializing the CSS skill level to 90
  const [bootstrapSkill] = useState(70); //Initializing the Bootstrap skill level to 70
  const [jsSkill] = useState(60); //Initializing the JavaScript skill level to 60
  const [reactSkill] = useState(30); //Initializing the React skill level to 30
  const [PythonSkill] = useState(25); //Initializing the Python skill level to 25

  return (
    <div id="skills" className="skill-page">
      <div className="skill">
        <h1>Skills</h1>
        <div className="skill-name"><i><FaHtml5/></i> HTML</div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: `${htmlSkill} %`}}><span className="progress-text">90%</span></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name"><i><FaCss3Alt/></i> CSS</div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: `${cssSkill }%` }}><span className="progress-text">90%</span></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name"><i><FaBootstrap/></i> Bootstrap</div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: `${bootstrapSkill}%` }}><span className="progress-text">70%</span></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name"><i><FaJsSquare/></i> JavaScript</div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: `${jsSkill}%` }}><span className="progress-text">60%</span></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name"><i><FaPython/></i> Python</div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: `${PythonSkill}%` }}><span className="progress-text">30%</span></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name"><i><FaReact/></i> React</div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: `${reactSkill}%` }}><span className="progress-text">25%</span></div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
