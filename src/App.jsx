import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import './App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Articles from './pages/Articles';
import Contact from './pages/Contact';

const Socials = ({ locationClass }) => (
  <div className={locationClass}>
    <a href="https://www.instagram.com/oluwatoyinajilore" target="_blank" rel="noreferrer" className="social-icon">
      <Instagram size={20} />
    </a>
    <a href="https://www.linkedin.com/in/oluwatoyinajilore/" target="_blank" rel="noreferrer" className="social-icon">
      <Linkedin size={20} />
    </a>
    <a href="https://x.com/toyin_ajilore" target="_blank" rel="noreferrer" className="social-icon">
      <Twitter size={20} />
    </a>
    <a href="https://www.youtube.com/@oluwatoyinajilore" target="_blank" rel="noreferrer" className="social-icon">
      <Youtube size={20} />
    </a>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="nav-brand">OAC.</Link>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link to="/works" className={`nav-link ${location.pathname === '/works' ? 'active' : ''}`}>Works</Link>
          <Link to="/articles" className={`nav-link ${location.pathname === '/articles' ? 'active' : ''}`}>Thought Leadership</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          <Socials locationClass="nav-socials" />
          <a href="mailto:hellotoyinajilore@gmail.com" className="btn btn-primary nav-cta">Connect With Me</a>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <Link to="/" className="nav-brand" style={{ color: 'var(--color-primary)' }}>Oluwatoyin Ajilore-Chukwuemeka</Link>
          <div className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/works">Works</Link>
            <Link to="/articles">Thought Leadership</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <Socials locationClass="nav-socials" />
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Oluwatoyin Ajilore-Chukwuemeka. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
