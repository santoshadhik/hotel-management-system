import React from 'react'
import { IoIosNotifications ,IoIosLogOut } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { GiHumanTarget } from "react-icons/gi";
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
       <div className="navbar">
        <div className="containers">
            <div className="admin-heading">
                <h1>Dashboard</h1>
            </div>
            <div className="search-box">
                <div className="search-item">
                    
            <input type="text" placeholder="Search..."/> 
             <FaSearch className='search-icon' />
                    </div>     
            </div>
            <div className="notify">
                <IoIosNotifications className='notify-item'/>
                <IoIosLogOut className='notify-item'/>
                <GiHumanTarget className='notify-item'/>

            </div>
        </div>
       </div>

      
    </div>
  )
}

export default Navbar