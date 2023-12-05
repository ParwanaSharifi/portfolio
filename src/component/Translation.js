import './Translation.css';

import React, { useState } from 'react';


const Translation= () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const handleToggle = () => {
    setIsEnglish(!isEnglish); // Toggles the value of isEnglish state
  };

  return (
    <div className="switch-translation">
      <label className="switch">
        <input type="checkbox" checked={!isEnglish} onChange={handleToggle} /> {/* Renders a checkbox input element */}
        <span className="slider round"></span> {/* Renders a slider element */}
      </label>
      <span className="label">{isEnglish ? 'English' : 'Español'}</span> {/* Renders the label text based on the value of isEnglish state */}
    </div>
  );
};


export default Translation;
