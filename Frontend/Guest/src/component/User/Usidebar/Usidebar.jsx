import React, { useState } from 'react';
import './Usidebar.css';
import { Link } from 'react-router-dom'; 

const Usidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
     
      {!isOpen && (
        <div className="menu-icon" onClick={toggleSidebar}>
          ☰
        </div>
      )}

     
      <div className={`Usidebar ${isOpen ? 'open' : ''}`}>
      {isOpen && (
          <div className="close-icon" onClick={toggleSidebar}>
            ❌
          </div>
        )}
          <ul onClick={toggleSidebar}  >
        <li >
          <Link to="/" className='Usidebar-link' >
            Home
          </Link>
        </li>

        <li >
          <Link to="/about" className='Usidebar-link' >
            About Us
          </Link>
        </li>
        <li>
          <Link to="/accomodation" className='Usidebar-link'>
            Accomodation
          </Link>
        </li>
        <li >
          <Link to="/services" className='Usidebar-link'>
            Service
          </Link>
        </li>
       
            <li >
          <Link to="/banquetsconferencehallandmeetingrooms"className='Usidebar-link' >
          BANQUETS, CONFERENCE HALL AND MEETING ROOMS
          </Link>
        </li>
        <li >
          <Link to="/gallery" className='Usidebar-link'>
            Gallery
          </Link>
        </li>
        <li >
          <Link to="/contact"className='Usidebar-link' >
            Contact
          </Link>
        </li>
        <li >
          <Link to="/dining"className='Usidebar-link' >
            Dining
          </Link>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default Usidebar;
