// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/User/Unavbar/Unavbar';
import Uaccomodation from './component/User/Uaccomodation/Uaccomodation';

import Services from './component/User/Uservices/Uservices';
import About from './component/User/Uabout/Uabout/';
import Contact from './component/User/Ucontact/Ucontact';
// import Rooms from './component/User/Uroom/Uroom';
import Home from './component/User/Uhome/Uhome';
import Login from './component/User/Ulogin/Usignin'
import Signup from './component/User/Ulogin/Usignup';
import Homepage from './Pages/Adminpage/Homepage/Homepage';
import Gallery from './component/User/Ugallery/Ugallery'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
      <Route path="/admin" element={<Homepage/>} />
        <Route exact path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/accomodation" element={<Uaccomodation/>} />

        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/signin" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
