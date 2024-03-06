import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/Pages/About/About';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Contact from './components/Pages/Contact/Contact';
import Resume from './components/Pages/Resume/Resume';
import Footer from './components/Footer/Footer'; // Make sure this path is correct
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container"> {/* Wrap content in a div for potential styling */}
        <Header /> {/* Ensures Header is displayed across all routes */}
        <main> {/* Use main for the primary content for semantic HTML */}
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            {/* You can add more routes here if you have additional sections */}
          </Routes>
        </main>
        <Footer /> {/* This ensures Footer is displayed across all routes */}
      </div>
    </Router>
  );
}

export default App;
