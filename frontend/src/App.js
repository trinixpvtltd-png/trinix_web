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
import UserDashboard from './pages/UserDashboard';
//i added this
import Career from './pages/Career';



import WhoWeServe from './pages/WhoWeServe';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
         
          <Route path="/who-we-serve" element={<WhoWeServe />} />
          
          
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
