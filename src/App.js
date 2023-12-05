import About from './component/profile';
import Skill from './component/Skill';
import Home from "./component/Homepage.js";
import Education from './component/Education';
import ProjectComponent from './component/ProjectComponent';
import Contact from './component/Contact';
import './component/Footer.css';
import NavigationBar from './component/NavigationBar.js';
import React, { useState, useEffect } from 'react';

function App() {
 
  // Switch theme
  const [theme, setTheme] = useState('light'); // Initializing the theme state with the value 'light'
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme'); // Retrieving the saved theme from local storage
    if (savedTheme) {
      setTheme(savedTheme); // Setting the theme state to the saved theme value
    }
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'; // Toggling between 'light' and 'dark' theme
    setTheme(newTheme); // Updating the theme state with the new theme value
    localStorage.setItem('theme', newTheme); // Saving the new theme value to local storage
  };
  return (
   
     <div>
    <div className={`footer ${theme}`}>
    <NavigationBar></NavigationBar>
      <Home></Home>
      <About></About>
      <Education></Education>
      <Skill></Skill>
      <ProjectComponent></ProjectComponent> 
      <Contact></Contact>
      <button class="day-night-button" onClick={handleThemeChange}>Switch Theme🔄</button>
      <p className="copyright">
        &copy; 2023 My Website. All rights reserved.
      </p>
      </div>
      </div>
     
);
}

export default App;


