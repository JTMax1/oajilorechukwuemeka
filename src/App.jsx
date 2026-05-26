import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin, Twitter, Youtube, ArrowRight } from 'lucide-react';
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
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleHashScroll = (id) => {
    setIsOpen(false);
    setMobileDropdownOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
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
          
          <div className="nav-item-dropdown">
          {/* Desktop Works Dropdown - Only renders on Desktop */}
          <div className="nav-item-dropdown desktop-only">
            <Link to="/works" className={`nav-link ${location.pathname === '/works' ? 'active' : ''}`}>Works</Link>
            <div className="mega-menu">
              <div className="mega-menu-grid">
                <div className="mega-menu-column">
                  <h4 className="mega-menu-title">Thought Leadership</h4>
                  <ul className="mega-menu-links">
                    <li><a href="https://www.thecable.ng/author/oluwatoyin-ajilore-chukwuemeka/" target="_blank" rel="noreferrer">Articles on TheCable</a></li>
                    <li><a href="https://www.igetafrica.org/policy-briefs/" target="_blank" rel="noreferrer">Policy Briefs</a></li>
                    <li><a href="https://www.linkedin.com/in/oluwatoyinajilore/" target="_blank" rel="noreferrer">LinkedIn Thought Pieces</a></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h4 className="mega-menu-title">Teacher Training & Research</h4>
                  <ul className="mega-menu-links">
                    <li><a href="https://www.globalschoolsprogram.org/post/educator-workshop-on-teaching-as-research" target="_blank" rel="noreferrer">Global Schools: Teaching as Research</a></li>
                    <li><a href="https://www.youtube.com/watch?v=rsJjvzOw8Q4&t=239s" target="_blank" rel="noreferrer">Global Schools Workshop Video</a></li>
                    <li><a href="https://www.youtube.com/watch?v=h2SFgkeX4Y8" target="_blank" rel="noreferrer">Skilled Teachers Academy Session</a></li>
                    <li><a href="https://oaccoaching.selar.com/44dr" target="_blank" rel="noreferrer">Tech Tools for Educators</a></li>
                    <li><a href="https://sites.tufts.edu/oluwatoyinajilore/" target="_blank" rel="noreferrer">Research Works at Tufts</a></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h4 className="mega-menu-title">Personal Transformation</h4>
                  <ul className="mega-menu-links">
                    <li><a href="https://bit.ly/OACBrochureNG" target="_blank" rel="noreferrer">OAC Coaching</a></li>
                    <li><a href="https://oaccoaching.selar.co/driven" target="_blank" rel="noreferrer">Book: Driven</a></li>
                    <li><a href="https://bit.ly/books_by_oac_" target="_blank" rel="noreferrer">Book: The Other Joseph</a></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h4 className="mega-menu-title">Social Entrepreneurship</h4>
                  <ul className="mega-menu-links">
                    <li><a href="https://oaccoaching.selar.com/shop" target="_blank" rel="noreferrer">ONE Foundation Shop</a></li>
                    <li><a href="https://www.youtube.com/watch?v=ulghsXPHR1A" target="_blank" rel="noreferrer">Impact Stories</a></li>
                    <li><a href="https://www.youtube.com/watch?v=p-qRQdyIu1A" target="_blank" rel="noreferrer">Community Projects</a></li>
                  </ul>
                </div>
              </div>
              <div className="mega-menu-footer">
                <Link to="/works" className="mega-menu-footer-link">
                  View All Works <ArrowRight size={15} style={{ marginLeft: '6px', verticalAlign: 'middle' }} />
                </Link>
              </div>
            </div>
          </div>
          {/* Mobile Works Dropdown - Accordion styled, only renders on Mobile */}
          <div className="mobile-only mobile-works-accordion">
            <button 
              className={`mobile-works-toggle nav-link ${location.pathname === '/works' ? 'active' : ''}`}
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              <span>Works</span>
              <span style={{ fontSize: '10px', transition: 'transform 0.3s ease', transform: mobileDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                ▼
              </span>
            </button>
            <div className={`mobile-works-dropdown ${mobileDropdownOpen ? 'open' : ''}`}>
              <Link to="/works#thought-leadership" className="mobile-dropdown-link" onClick={() => handleHashScroll('thought-leadership')}>
                Thought Leadership
              </Link>
              <Link to="/works#teacher-training" className="mobile-dropdown-link" onClick={() => handleHashScroll('teacher-training')}>
                Teacher Training & Research
              </Link>
              <Link to="/works#personal-transformation" className="mobile-dropdown-link" onClick={() => handleHashScroll('personal-transformation')}>
                Personal Transformation
              </Link>
              <Link to="/works#social-entrepreneurship" className="mobile-dropdown-link" onClick={() => handleHashScroll('social-entrepreneurship')}>
                Social Entrepreneurship
              </Link>
            </div>
          </div>
          <Link to="/articles" className={`nav-link ${location.pathname === '/articles' ? 'active' : ''}`}>Thought Leadership</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          <Socials locationClass="nav-socials" />
          <a href="mailto:hellotoyinajilore@gmail.com" className="btn btn-primary nav-cta">Connect With Me</a>
        </div>
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
