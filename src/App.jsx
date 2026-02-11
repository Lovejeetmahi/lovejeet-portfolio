import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css'; 
import { 
  Github, 
  Linkedin, 
  Sun, 
  Moon, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  Code, 
  Layout, 
  Shield, 
  Database, 
  Eye, 
  Download 
} from "lucide-react";import './App.css';

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const certRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const scrollVault = (dir) => {
    certRef.current.scrollBy({ left: dir === 'left' ? -500 : 500, behavior: 'smooth' });
  };

  return (
    <div className={isDark ? 'dark-mode' : ''}>
      <motion.div animate={{ x: mouse.x, y: mouse.y }} className="plasma p1" />
      <motion.div animate={{ x: -mouse.x, y: -mouse.y }} className="plasma p2" />

      {/* --- Navigation --- */}
      <nav className="nav-container">
        <div className="nav-logo">
          <div className="logo-sq"></div>
          <span className="logo-text">LOVEJEET MAHI</span>
        </div>
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#vault">Vault</a>
        </div>
        <div className="nav-actions">
          <button onClick={() => setIsDark(!isDark)} className="theme-btn">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="/Lovejeet_Mahi_Resume.pdf" target="_blank" className="resume-btn">RESUME</a>
        </div>
      </nav>

      {/* --- Hero --- */}
      <section className="hero">
        <div className="badge">FULL-STACK ARCHITECT</div>
        <h1 className="hero-h1">DESIGNING<br /><span className="hero-accent">SYSTEMS.</span></h1>
        <p className="hero-p">
          B.Tech CSE student at <strong>Lovely Professional University</strong>. Building high-performance digital ecosystems.
        </p>
      </section>

      {/* --- Project Marquee --- */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">LATEST <span className="primary-color">SHIPMENTS.</span></h2>
        <div className="marquee-track">
          {[...projectsData, ...projectsData].map((p, i) => (
            <div key={i} className="project-card glass">
              <div className="project-icon">{p.icon}</div>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-footer">
                <span className="project-stack">{p.stack}</span>
                <a href={p.link} target="_blank" rel="noreferrer" className="project-link-btn">
                  <ArrowRight size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Certificate Vault --- */}
      <section id="vault" className="vault-section">
        <div className="vault-header">
          <h2 className="vault-title">THE VAULT.</h2>
          <div className="vault-controls">
            <button onClick={() => scrollVault('left')} className="ctrl-btn"><ChevronLeft /></button>
            <button onClick={() => scrollVault('right')} className="ctrl-btn"><ChevronRight /></button>
          </div>
        </div>
        <div className="cert-slider no-scrollbar" ref={certRef}>
          {certsData.map((c, i) => (
            <div key={i} className="cert-card glass">
              <div className="cert-top">
                <div className="cert-icon">{c.icon}</div>
                <span className="cert-date">{c.date}</span>
              </div>
              <h3 className="cert-name">{c.title}</h3>
              <p className="cert-org">{c.org}</p>
              
              <div className="cert-actions">
                <a href={c.file} target="_blank" rel="noreferrer" className="cert-action-btn">
                  <Eye size={16} /> View
                </a>
                <a href={c.file} download className="cert-action-btn download">
                  <Download size={16} /> Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="footer">
        <h2 className="footer-h2">LET'S BUILD.</h2>
        <a href="mailto:mahilovejeet27@gmail.com" className="email-link">mahilovejeet27@gmail.com</a>
        <div className="socials">
          <a href="https://github.com/Lovejeetmahi" target="_blank">GITHUB</a>
          <a href="https://linkedin.com/in/lovejeet-mahi" target="_blank">LINKEDIN</a>
        </div>
      </footer>
    </div>
  );
};

const projectsData = [
  { 
    name: 'Library Management', 
    stack: 'PHP / MYSQL', 
    desc: 'Advanced inventory system with API integration and mobile support.', 
    icon: '📚',
    link: 'https://github.com/Lovejeetmahi' 
  },
  { 
    name: 'Last-Mile Routing', 
    stack: 'JS / PHP', 
    desc: 'Logistics tool with shareable account reports and branding.', 
    icon: '📍',
    link: 'https://github.com/Lovejeetmahi'
  },
  { 
    name: 'Secure File Sync', 
    stack: 'AUTH / PHP', 
    desc: 'Encrypted storage ecosystem with multi-user authentication.', 
    icon: '🔐',
    link: 'https://github.com/Lovejeetmahi'
  }
];

const certsData = [
  { title: "Laravel Masterclass", org: "UDEMY", date: "JAN 2026", icon: "🛠️", file: "/certs/laravel.pdf" },
  { title: "Engineering Leadership", org: "RICE UNIVERSITY", date: "JAN 2026", icon: "📜", file: "/certs/rice.pdf" },
  { title: "Social Media Security", org: "NPTEL", date: "APR 2025", icon: "🛡️", file: "/certs/security.pdf" },
  { title: "Java Development", org: "LPU", date: "JULY 2025", icon: "☕", file: "/certs/java.pdf" }
];

export default App;