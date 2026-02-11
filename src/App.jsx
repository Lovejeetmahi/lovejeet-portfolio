import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Sun, Moon, ArrowRight, ChevronLeft, ChevronRight, Award, Code, Layout, Shield, Database } from 'lucide-react';
import './App.css';

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

      {/* --- Restored Navigation --- */}
      <nav className="nav-container">
        <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
          <div style={{width: '35px', height: '35px', background: 'var(--primary)', borderRadius: '8px', transform: 'rotate(12deg)'}}></div>
          <span style={{fontWeight: 900, letterSpacing: '-1px', fontSize: '1.2rem'}}>LOVEJEET MAHI</span>
        </div>
        <div style={{display: 'flex', gap: '30px', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px'}}>
          <a href="#skills" style={{color: 'inherit', textDecoration: 'none'}}>Skills</a>
          <a href="#projects" style={{color: 'inherit', textDecoration: 'none'}}>Projects</a>
          <a href="#vault" style={{color: 'inherit', textDecoration: 'none'}}>Vault</a>
        </div>
        <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
          <button onClick={() => setIsDark(!isDark)} style={{background: 'none', border: 'none', cursor: 'pointer', color: 'inherit'}}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="/resume.pdf" style={{background: 'var(--primary)', color: 'white', padding: '12px 25px', borderRadius: '50px', fontWeight: 900, fontSize: '10px', textDecoration: 'none'}}>RESUME</a>
        </div>
      </nav>

      {/* --- Hero --- */}
      <section style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 20px', position: 'relative', zIndex: 10}}>
        <div style={{padding: '8px 20px', border: '1px solid var(--border)', borderRadius: '50px', fontSize: '10px', fontWeight: 900, letterSpacing: '2px', color: 'var(--primary)', marginBottom: '30px'}}>FULL-STACK ARCHITECT</div>
        <h1 style={{fontSize: 'clamp(3.5rem, 12vw, 9rem)', fontWeight: 900, lineHeight: 0.85, letterSpacing: '-0.05em'}}>
          DESIGNING<br /><span style={{color: 'var(--primary)', fontStyle: 'italic'}}>SYSTEMS.</span>
        </h1>
        <p style={{maxWidth: '600px', marginTop: '40px', fontSize: '1.2rem', opacity: 0.7, lineHeight: 1.6}}>
          B.Tech CSE student at <span style={{fontWeight: 800}}>Lovely Professional University</span>. Building high-performance digital ecosystems.
        </p>
      </section>

      {/* --- Skills Arsenal --- */}
      <section id="skills" style={{padding: '120px 20px', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10}}>
        <h2 style={{fontSize: '4rem', fontWeight: 900, marginBottom: '60px', fontStyle: 'italic'}}>TECH STACK.</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px'}}>
          {skillsData.map((s, i) => (
            <div key={i} style={{padding: '50px', borderRadius: '40px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', backdropFilter: 'blur(10px)'}}>
              <div style={{color: 'var(--primary)', marginBottom: '25px'}}>{s.icon}</div>
              <h3 style={{fontSize: '1.6rem', fontWeight: 800, marginBottom: '10px'}}>{s.title}</h3>
              <p style={{fontSize: '0.9rem', opacity: 0.6, fontWeight: 600}}>{s.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Restored Project Marquee --- */}
      <section id="projects" style={{padding: '140px 0', background: 'rgba(0,0,0,0.3)', overflow: 'hidden', position: 'relative', zIndex: 10}}>
        <h2 style={{padding: '0 60px', fontSize: '6rem', fontWeight: 900, marginBottom: '60px'}}>LATEST <span style={{color: 'var(--primary)'}}>SHIPMENTS.</span></h2>
        <div className="marquee-track">
          {[...projectsData, ...projectsData].map((p, i) => (
            <div key={i} style={{width: '600px', padding: '60px', borderRadius: '50px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', backdropFilter: 'blur(20px)', flexShrink: 0}}>
              <div style={{fontSize: '5rem', marginBottom: '30px'}}>{p.icon}</div>
              <h3 style={{fontSize: '2.5rem', fontWeight: 900, marginBottom: '20px'}}>{p.name}</h3>
              <p style={{color: '#94a3b8', fontSize: '1.1rem', marginBottom: '40px', whiteSpace: 'normal'}}>{p.desc}</p>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <span style={{fontSize: '10px', fontWeight: 900, color: 'var(--primary)', letterSpacing: '3px'}}>{p.stack}</span>
                <ArrowRight />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- NGO Impact --- */}
      <section style={{padding: '120px 20px', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10}}>
        <div style={{padding: '80px', borderRadius: '60px', background: 'rgba(59,130,246,0.05)', border: '1px solid var(--border)', textAlign: 'center'}}>
          <Award size={60} style={{color: 'var(--primary)', marginBottom: '40px'}} />
          <h2 style={{fontSize: '3rem', fontWeight: 900, lineHeight: 1.1}}>
            "Driving <span style={{color: 'var(--primary)'}}>Change</span> through NGO-based Social Outreach Programs."
          </h2>
        </div>
      </section>

      {/* --- Restored Certificate Vault --- */}
      <section id="vault" style={{padding: '120px 0', position: 'relative', zIndex: 10}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px'}}>
          <h2 style={{fontSize: '6rem', fontWeight: 900}}>THE VAULT.</h2>
          <div style={{display: 'flex', gap: '20px'}}>
            <button onClick={() => scrollVault('left')} style={{padding: '20px', borderRadius: '25px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: 'inherit', cursor: 'pointer'}}><ChevronLeft /></button>
            <button onClick={() => scrollVault('right')} style={{padding: '20px', borderRadius: '25px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: 'inherit', cursor: 'pointer'}}><ChevronRight /></button>
          </div>
        </div>
        <div style={{display: 'flex', gap: '30px', overflowX: 'auto', padding: '0 60px'}} className="no-scrollbar" ref={certRef}>
          {certsData.map((c, i) => (
            <div key={i} style={{minWidth: '500px', padding: '60px', borderRadius: '50px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', backdropFilter: 'blur(10px)'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '40px'}}>
                <div style={{fontSize: '4rem'}}>{c.icon}</div>
                <span style={{fontSize: '10px', fontWeight: 900, padding: '8px 15px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px'}}>{c.date}</span>
              </div>
              <h3 style={{fontSize: '1.8rem', fontWeight: 900, marginBottom: '15px'}}>{c.title}</h3>
              <p style={{color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase'}}>{c.org}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Contact Footer --- */}
      <footer style={{padding: '160px 20px', textAlign: 'center', borderTop: '1px solid var(--border)', position: 'relative', zIndex: 10}}>
        <h2 style={{fontSize: '8rem', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '60px'}}>LET'S BUILD.</h2>
        <a href="mailto:mahilovejeet27@gmail.com" style={{fontSize: '3rem', fontWeight: 900, color: 'inherit', textDecoration: 'none'}}>mahilovejeet27@gmail.com</a>
        <div style={{marginTop: '80px', display: 'flex', justifyContent: 'center', gap: '60px', fontWeight: 800, fontSize: '11px', letterSpacing: '4px'}}>
          <a href="https://github.com/Lovejeetmahi" style={{color: 'inherit', textDecoration: 'none'}}>GITHUB</a>
          <a href="https://linkedin.com/in/lovejeet-mahi" style={{color: 'inherit', textDecoration: 'none'}}>LINKEDIN</a>
        </div>
      </footer>
    </div>
  );
};

const skillsData = [
  { title: "Frontend", tech: "React, Tailwind, Framer Motion, HTML5/CSS3", icon: <Layout size={35} /> },
  { title: "Backend", tech: "Node.js, Express, PHP, Java", icon: <Code size={35} /> },
  { title: "Database", tech: "MySQL, MongoDB Architecture, Normalization", icon: <Database size={35} /> },
  { title: "Security", tech: "Social Media Security, Auth Systems", icon: <Shield size={35} /> }
];

const projectsData = [
  { name: 'Library Management', stack: 'PHP / MYSQL / MIT APP', desc: 'Advanced inventory system with smooth API integration and mobile support.', icon: '📚' },
  { name: 'Last-Mile Routing', stack: 'JS / PHP / MYSQL', desc: 'Logistics optimization tool with shareable account reports and branding.', icon: '📍' },
  { name: 'Secure File Sync', stack: 'PHP / MYSQL / AUTH', desc: 'Security-focused file ecosystem with encrypted storage and multi-user auth.', icon: '🔐' }
];

const certsData = [
  { title: "Laravel Masterclass", org: "Udemy", date: "JAN 2026", icon: "🛠️" },
  { title: "Engineering Leadership", org: "Rice University", date: "JAN 2026", icon: "📜" },
  { title: "Social Media Security", org: "NPTEL / IIIT Hyderabad", date: "APR 2025", icon: "🛡️" },
  { title: "Java Development", org: "Lovely Professional University", date: "JULY 2025", icon: "☕" }
];

export default App;