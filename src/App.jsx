import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Sun, Moon, ArrowRight, Code, Layout, Shield, BookOpen, MapPin, Award } from 'lucide-react';
import './App.css';

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 25,
        y: (e.clientY / window.innerHeight - 0.5) * 25,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className={isDark ? 'dark-mode' : ''}>
      <div className="main-content" style={{position: 'relative', zIndex: 1}}>
        <motion.div animate={{ x: mouse.x, y: mouse.y }} className="plasma plasma-1" />
        <motion.div animate={{ x: -mouse.x, y: -mouse.y }} className="plasma plasma-2" />

        {/* --- NAV --- */}
        <nav style={{position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', width: '90%', maxWidth: '1100px', height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 30px', zIndex: 100}} className="glass">
          <div style={{fontWeight: 900, letterSpacing: '-1px'}}>LOVEJEET MAHI</div>
          <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
            <button onClick={() => setIsDark(!isDark)} style={{background: 'none', border: 'none', cursor: 'pointer', color: 'inherit'}}>
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="/resume.pdf" className="glass" style={{padding: '10px 20px', fontSize: '12px', fontWeight: 800, textDecoration: 'none', color: 'inherit'}}>RESUME</a>
          </div>
        </nav>

        {/* --- HERO --- */}
        <header style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 20px'}}>
          <h1 style={{fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em'}}>
            CRAFTING <span style={{color: 'var(--primary)'}}>SYSTEMS</span><br />OF TOMORROW.
          </h1>
          <p style={{maxWidth: '600px', marginTop: '30px', fontSize: '1.2rem', opacity: 0.7}}>
            Full-Stack Architect at <span style={{fontWeight: 800}}>Lovely Professional University</span>. Specialized in high-performance digital ecosystems.
          </p>
        </header>

        {/* --- SKILLS ARSENAL --- */}
        <section style={{padding: '100px 20px', maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '3rem', fontWeight: 900, marginBottom: '50px'}}>THE ARSENAL.</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px'}}>
            {skills.map((s, i) => (
              <div key={i} className="glass" style={{padding: '40px'}}>
                <div style={{color: 'var(--primary)', marginBottom: '20px'}}>{s.icon}</div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 800, marginBottom: '10px'}}>{s.title}</h3>
                <p style={{fontSize: '0.9rem', opacity: 0.6}}>{s.tech}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- PROJECTS MARQUEE --- */}
        <section style={{padding: '100px 0', background: 'rgba(0,0,0,0.2)', overflow: 'hidden'}}>
          <div className="marquee-track">
            {[...projects, ...projects].map((p, i) => (
              <div key={i} className="glass" style={{width: '500px', padding: '50px', flexShrink: 0}}>
                <h3 style={{fontSize: '2rem', fontWeight: 900, marginBottom: '15px'}}>{p.name}</h3>
                <p style={{opacity: 0.6, marginBottom: '30px', whiteSpace: 'normal'}}>{p.desc}</p>
                <div style={{display: 'flex', justifyContent: 'space-between', color: 'var(--primary)', fontWeight: 800, fontSize: '10px', letterSpacing: '2px'}}>
                  <span>{p.stack}</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- NGO IMPACT --- */}
        <section style={{padding: '100px 20px', maxWidth: '1000px', margin: '0 auto'}}>
          <div className="glass" style={{padding: '60px', textAlign: 'center', background: 'linear-gradient(rgba(59, 130, 246, 0.05), transparent)'}}>
            <Award size={48} style={{color: 'var(--primary)', marginBottom: '30px'}} />
            <h2 style={{fontSize: '2.5rem', fontWeight: 900}}>
              "Driving <span style={{color: 'var(--primary)'}}>Change</span> through NGO-based Social Outreach Programs."
            </h2>
          </div>
        </section>

        {/* --- THE VAULT (CERTIFICATES) --- */}
        <section style={{padding: '100px 20px', maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '3rem', fontWeight: 900, marginBottom: '50px'}}>THE VAULT.</h2>
          <div style={{display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '30px'}} className="no-scrollbar">
            {certs.map((c, i) => (
              <div key={i} className="glass" style={{minWidth: '400px', padding: '40px'}}>
                <span style={{fontSize: '10px', fontWeight: 900, opacity: 0.5}}>{c.date}</span>
                <h3 style={{fontSize: '1.4rem', fontWeight: 800, margin: '15px 0'}}>{c.title}</h3>
                <p style={{color: 'var(--primary)', fontWeight: 700}}>{c.org}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT --- */}
        <footer style={{padding: '100px 20px', textAlign: 'center', borderTop: '1px solid var(--border-dark)'}}>
          <h2 style={{fontSize: '4rem', fontWeight: 900, marginBottom: '40px'}}>LET'S BUILD.</h2>
          <p style={{fontSize: '1.5rem', fontWeight: 700}}>mahilovejeet27@gmail.com</p>
          <div style={{marginTop: '50px', display: 'flex', justifyContent: 'center', gap: '30px'}}>
            <a href="https://github.com/Lovejeetmahi" style={{color: 'inherit', textDecoration: 'none', fontWeight: 800}}>GITHUB</a>
            <a href="https://linkedin.com/in/lovejeet-mahi" style={{color: 'inherit', textDecoration: 'none', fontWeight: 800}}>LINKEDIN</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

const skills = [
  { title: "Frontend", tech: "React, Tailwind, Framer Motion", icon: <Layout /> },
  { title: "Backend", tech: "Node.js, Express, PHP, Java", icon: <Code /> },
  { title: "Database", tech: "MySQL, MongoDB Architecture", icon: <Shield /> },
  { title: "Languages", tech: "C++, Python, JS, PHP", icon: <BookOpen /> }
];

const projects = [
  { name: 'Library Management', stack: 'PHP / MYSQL', desc: 'Advanced inventory system with API integration.' },
  { name: 'Route Planning', stack: 'JS / PHP', desc: 'Logistics tool with shareable reports.' },
  { name: 'Secure File Sync', stack: 'AUTH / PHP', desc: 'Encrypted storage ecosystem.' }
];

const certs = [
  { title: "Laravel Masterclass", org: "Udemy", date: "JAN 2026" },
  { title: "Engineering Leadership", org: "Rice University", date: "JAN 2026" },
  { title: "Social Media Security", org: "NPTEL", date: "APR 2025" },
  { title: "Java Development", org: "LPU", date: "JULY 2025" }
];

export default App;