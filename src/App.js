import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home.js';
import About from './pages/About.js';
import Service from './pages/Service.js';
import Contact from './pages/Contact.js';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
