import React from 'react'
import './Unavbar.css'
// import hotel_logo from '../../../assets/Hotel-logo.jpg';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaGoogle, FaTwitter} from 'react-icons/fa';

const Unavbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="navbar-logo">
       <h1>City View IN</h1>
      </Link>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/about" className="navbar-link">
            About Us
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/accomodation" className="navbar-link">
            Accomodation
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/services" className="navbar-link">
            Service
          </Link>
        </li>
       
        <li className="navbar-item">
          <Link to="/gallery" className="navbar-link">
            Gallery
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </li>
      </ul>
      <div className="btn">
        <button><Link to='/signin' className="navbar-link">LOGIN</Link></button>
        <div className='icons'>
          <FaFacebook className='icons-items'/>
          <FaInstagram className='icons-items'/>
          <FaGoogle className='icons-items'/>
          <FaTwitter className='icons-items'/>
        </div>
      </div>
     
    </div>
   
  </nav>
  )

}


export default Unavbar