import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/Pages/About/About';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Contact from './components/Pages/Contact/Contact';
import Resume from './components/Pages/Resume/Resume';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
