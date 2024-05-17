import React from 'react'
import './Navbar.css'
import hotel_logo from '../../assets/Hotel-logo.jpg';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaGoogle, FaTwitter} from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="navbar-logo">
        <img src={hotel_logo} alt="" />
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
          <Link to="/services" className="navbar-link">
            Service
          </Link>
        </li>
       
        <li className="navbar-item">
          <Link to="/rooms" className="navbar-link">
            Rooms
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

export default Navbar