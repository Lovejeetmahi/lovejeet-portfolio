import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Sun, Moon, ArrowUpRight, Code, Database, Layout, Sparkles } from 'lucide-react';
import './App.css';

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

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

  return (
    <div className={`main-container ${isDark ? 'dark-mode' : ''}`}>
      <motion.div animate={{ x: mouse.x, y: mouse.y }} className="plasma plasma-top" />
      <motion.div animate={{ x: -mouse.x, y: -mouse.y }} className="plasma plasma-bottom" />

      <nav className="nav-wrapper">
        <div style={{fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.5px'}}>LM.</div>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </div>
        <button onClick={() => setIsDark(!isDark)} style={{background: 'none', border: 'none', cursor: 'pointer', color: 'inherit'}}>
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      <section className="hero" style={{minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 20px'}}>
        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}}>
           <h1 className="hero-title">
            Crafting <span className="gradient-text">Digital</span><br />Architectures.
          </h1>
          <p style={{maxWidth: '550px', marginTop: '2rem', fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.6}}>
            I'm Lovejeet Mahi. A Full-Stack Engineer building scalable, high-performance systems at Lovely Professional University.
          </p>
        </motion.div>
      </section>

      <section id="stack" style={{padding: '100px 20px', maxWidth: '1200px', margin: '0 auto'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px'}}>
          {stackData.map((item, i) => (
            <div key={i} className="glass-card">
              <div style={{color: 'var(--primary)', marginBottom: '1.5rem'}}>{item.icon}</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem'}}>{item.title}</h3>
              <p style={{fontSize: '0.9rem', opacity: 0.7}}>{item.tools}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" style={{padding: '150px 20px', textAlign: 'center'}}>
        <h2 style={{fontSize: '3rem', fontWeight: 800, marginBottom: '3rem'}}>Let's collaborate.</h2>
        <div style={{display: 'flex', justifyContent: 'center', gap: '30px'}}>
          <a href="#" className="glass-card" style={{padding: '1.5rem 3rem', textDecoration: 'none', color: 'inherit', fontWeight: 600}}>Email</a>
          <a href="#" className="glass-card" style={{padding: '1.5rem 3rem', textDecoration: 'none', color: 'inherit', fontWeight: 600}}>LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

const stackData = [
  { title: "Frontend", tools: "React.js, Tailwind, Framer Motion, HTML5/CSS3", icon: <Layout size={32} /> },
  { title: "Backend", tools: "Node.js, Express, PHP, Laravel", icon: <Code size={32} /> },
  { title: "Database", tools: "MongoDB, MySQL, Database Normalization", icon: <Database size={32} /> },
  { title: "Languages", tools: "JavaScript, Java, Python, C++, C", icon: <Sparkles size={32} /> }
];

export default App;