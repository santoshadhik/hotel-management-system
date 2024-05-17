// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Frontpage/Navbar/Navbar';
import Services from './component/Frontpage/Services/Service';
import About from './component/Frontpage/About/About';
import Contact from './component/Frontpage/Contact/Contact';
import Rooms from './component/Frontpage/Room/Room';
import Home from './component/Frontpage/Home/Home';
import Login from './component/Frontpage/Login/Signin'
import Signup from './component/Frontpage/Login/Signup';
import Homepage from './Pages/Admin/Homepage/Homepage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
      <Route path="/admin" element={<Homepage/>} />
        <Route exact path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/rooms" element={<Rooms/>} />
        <Route path="/signin" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
