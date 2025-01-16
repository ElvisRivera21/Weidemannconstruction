// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NewConstruction from './galleries/NewConstruction'; // Updated import
import GarageGallery from './galleries/GarageGallery';
import ProjectManagementGallery from './galleries/ProjectManagementGallery';
import InteriorGallery from './galleries/InteriorGallery'; // Import InteriorGallery

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add gallery routes */}
          <Route path="/gallery/residential" element={<NewConstruction />} /> {/* Updated component */}
          <Route path="/gallery/garage" element={<GarageGallery />} />
          <Route path="/gallery/project-management" element={<ProjectManagementGallery />} />
          <Route path="/gallery/interior" element={<InteriorGallery />} /> {/* Added InteriorGallery route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
