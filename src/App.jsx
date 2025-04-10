import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; // Import Home component
import About from './pages/About';
import Contact from './pages/contactme';
import GitHub from './pages/Github'; // Make sure the filename is exactly "GitHub.jsx"



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/about" element={<About />} />
        <Route path="/contactme" element={<Contact />} />
        <Route path="/github" element={<GitHub />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;