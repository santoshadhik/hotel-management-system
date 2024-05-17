// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Services from './component/Services/Service';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Rooms from './component/Room/Room';
import Home from './component/Home/Home';
import Login from './component/Login/Signin'
import Signup from './component/Login/Signup';
import Homepage from './Pages/Admin/Homepage/Homepage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/rooms" element={<Rooms/>} />
        <Route path="/signin" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/admin" element={<Homepage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
