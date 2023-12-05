import React, { useState } from 'react';
import './NavigationBar.css';
import  Translation from './Translation';
const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
      /* Define state and event handler for the search bar */
     const [searchTerm, setSearchTerm] = useState('');
     const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };
  const navigationItems = ['Home' , 'About', 'Skills','Education','Experience','Contact'];
  return (
    <nav className={`navigation-bar ${isOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      
      {isOpen && (
         /* Render the search bar when the menu is open */
        <div className="search-bar">
        <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
      </div>
      )}
       <div className="menu-items">
        {navigationItems
          .filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
      </div>
      <Translation></Translation>
    </nav>
    );
};

export default NavigationBar;
