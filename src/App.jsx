import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; 
import Advice from './pages/Advice';
import Contactme from './pages/Contactme';
import Resume from './pages/Resume'; 
import Projects from './pages/Projects';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/advice" element={<Advice />} />
        <Route path="/contactme" element={<Contactme />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;