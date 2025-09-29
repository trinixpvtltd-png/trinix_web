import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ChatBot from './components/ChatBot';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Research from './pages/Research';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Login from './pages/Login';
//i added this
import Career from './pages/Career';
import OurThinking from './pages/OurThinking';
import WhatWeDo from './pages/WhatWeDo';
import WhoWeAre from './pages/WhoWeAre';
import WhoWeServe from './pages/WhoWeServe';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/who-we-serve" element={<WhoWeServe />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/our-thinking" element={<OurThinking />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
