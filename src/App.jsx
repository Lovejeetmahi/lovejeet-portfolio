import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { motion } from 'framer-motion';
import { ExternalLink, Download, Moon, Sun, Github, Linkedin, ArrowRight, Mail, Phone } from 'lucide-react';

// --- ASSET IMPORTS (Files must be in the same folder as App.jsx) ---
import resumeFile from './Lovejeet_Mahi_Resume.pdf';
import riceCertFile from './interpersonal communication.pdf';
import udemyCertFile from './udemy laravel.pdf';
import nptelCertFile from './Privacy and Security in Online Social Media.pdf';
import trainingCertFile from './Summer training.pdf';
import profileImg from './Myphoto.jpeg';

// --- DATA ARRAYS ---

const skills = [
  { cat: 'Languages', items: 'C, C++, JS, PHP, Java, Python' },
  { cat: 'Frontend', items: 'HTML5, CSS3, React, Tailwind' },
  { cat: 'Backend', items: 'Node.js, Express, PHP' },
  { cat: 'Data Control', items: 'MySQL, MongoDB Architecture' }
];

// UPDATED: Replaced Secure File Management with Cookiify
const projects = [
  { 
    title: 'Cookiify', 
    tech: 'React / Tailwind / Vercel /NodeJs ', 
    desc: 'A modern, high-performance web application deployed for culinary exploration.', 
    icon: '🍪', // Cookie icon for Cookiify
    link: 'https://cookiify.vercel.app/' // LINKED HERE
  },
  { 
    title: 'Library Management System', 
    tech: 'PHP / MySQL / MIT App Inventor', 
    desc: 'Advanced inventory system with smooth API integration and mobile support.', 
    icon: '📚',
    link: '#' // No link provided for this one yet
  },
  { 
    title: 'Last-Mile Route Planning', 
    tech: 'JS / PHP / MySQL', 
    desc: 'Logistics optimization tool with shareable account reports and custom branding.', 
    icon: '📍',
    link: '#' 
  }
  
];

const certs = [
  { 
    org: 'Rice University', 
    title: 'Interpersonal Communication for Engineering Leaders', 
    date: 'Jan 2026', 
    icon: '📜',
    pdf: riceCertFile 
  },
  { 
    org: 'Udemy', 
    title: 'PHP with Laravel Masterclass (43 Hours)', 
    date: 'Jan 2026', 
    icon: '🛠️',
    pdf: udemyCertFile 
  },
  { 
    org: 'NPTEL / IIIT Hyderabad', 
    title: 'Privacy & Security in Social Media', 
    date: 'Apr 2025', 
    icon: '🛡️',
    pdf: nptelCertFile 
  },
  { 
    org: 'Lovely Professional University', 
    title: 'JAVA for Application Development', 
    date: 'July 2025', 
    icon: '☕',
    pdf: trainingCertFile 
  }
];

// --- MAIN COMPONENT ---

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const tiltRefs = useRef([]);

  // Theme Sync Logic
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    VanillaTilt.init(tiltRefs.current, {
      max: 5,
      speed: 400,
      glare: true,
      "max-glare": 0.1,
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-onyx text-slate-900 dark:text-slate-200 transition-colors duration-700 overflow-x-hidden scroll-smooth">
      
      {/* Background Plasma */}
      <div className="plasma top-[-10%] left-[-5%] animate-pulse" />
      <div className="plasma bottom-[-10%] right-[-5%] opacity-50" />

      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl glass rounded-full px-6 md:px-10 h-20 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-crimson-600 to-crimson-900 rounded-lg rotate-12 group-hover:rotate-0 transition-all shadow-lg" />
          <a href="#home" className="text-lg md:text-xl font-black tracking-tighter uppercase dark:text-white">LOVEJEET MAHI</a>
        </div>
        
        {/* Menu Buttons */}
        <div className="hidden md:flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em]">
          <a href="#home" className="hover:text-crimson-600 transition">Home</a>
          <a href="#impact" className="hover:text-crimson-600 transition">Impact</a>
          <a href="#skills" className="hover:text-crimson-600 transition">Skills</a>
          <a href="#projects" className="hover:text-crimson-600 transition">Projects</a>
          <a href="#vault" className="hover:text-crimson-600 transition">Vault</a>
          <a href="#contact" className="hover:text-crimson-600 transition">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="w-10 h-10 glass rounded-full flex items-center justify-center hover:border-crimson-600 transition cursor-pointer"
          >
            {isDark ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>
          
          <a href={resumeFile} download="Lovejeet_Mahi_Resume.pdf" className="hidden sm:block px-6 py-2 bg-crimson-600 text-white rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-crimson-700 transition">
            Resume
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-64 pb-20 px-6 flex flex-col items-center text-center z-10">
        <div className="relative group mb-12">
            <div className="absolute -inset-6 bg-crimson-600/10 rounded-full blur-3xl opacity-50"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 glass rounded-[4rem] p-4 group-hover:scale-105 transition-all duration-1000">
                <img src={profileImg} alt="Lovejeet Mahi" className="w-full h-full object-cover rounded-[3rem] grayscale group-hover:grayscale-0 transition-all duration-1000" />
            </div>
        </div>

        <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter leading-none text-slate-900 dark:text-white mb-10">
          DESIGNING<br />
          <span className="bg-gradient-to-r from-crimson-500 via-crimson-600 to-crimson-900 bg-clip-text text-transparent">SYSTEMS.</span>
        </h1>
        <p className="max-w-xl text-lg text-slate-500 dark:text-slate-400 font-medium">
          I am Lovejeet Mahi. A Full-Stack Architect specialized in high-performance digital ecosystems, currently at <span className="text-crimson-600 font-black">LPU</span>.
        </p>
      </section>

      

      {/* Skills */}
      <section id="skills" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <span className="text-[10px] font-black tracking-[0.5em] uppercase text-crimson-600">The Arsenal</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 italic dark:text-white uppercase">Tech Stack.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div key={i} ref={el => tiltRefs.current[i] = el} className="p-10 glass rounded-[3rem] hover:border-crimson-600 transition-all group">
              <div className="h-1 w-12 bg-crimson-600 mb-8 group-hover:w-full transition-all duration-500" />
              <h3 className="text-xl font-black mb-4 dark:text-white uppercase">{skill.cat}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-bold">{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-40 bg-onyx text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">Latest <span className="text-crimson-600">Shipments.</span></h2>
        </div>
        <div className="flex gap-8 overflow-x-auto px-10 pb-10 no-scrollbar">
          {projects.map((proj, i) => (
            <div key={i} className="min-w-[350px] md:min-w-[550px] p-12 glass border-white/5 bg-white/5 rounded-[4rem] group">
              <div className="text-6xl mb-10 group-hover:scale-110 transition-transform">{proj.icon}</div>
              <h3 className="text-3xl font-black mb-4 uppercase">{proj.title}</h3>
              <p className="text-slate-400 text-lg mb-10">{proj.desc}</p>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black tracking-widest text-crimson-600 uppercase">{proj.tech}</span>
                {/* UPDATED: Arrow is now a functional Link */}
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-crimson-600 transition-colors cursor-pointer">
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vault */}
      <section id="vault" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-20 dark:text-white uppercase">The Vault.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
            <div key={i} className="p-10 glass rounded-[3rem] hover:border-crimson-600 transition-all group">
              <div className="flex justify-between items-start mb-10">
                <span className="text-5xl">{cert.icon}</span>
                <span className="text-[9px] font-black text-slate-500 bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full">{cert.date}</span>
              </div>
              <h3 className="text-xl font-black mb-2 dark:text-white uppercase leading-tight">{cert.title}</h3>
              <p className="text-slate-500 font-bold italic mb-8 uppercase text-[10px]">{cert.org}</p>
              <a href={cert.pdf} download className="flex items-center gap-2 text-[10px] font-black text-crimson-600 uppercase tracking-widest group-hover:gap-4 transition-all">
                Download <Download className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </section>
          {/* Achievement Section */}
      <section id="impact" className="py-20 px-6 max-w-5xl mx-auto relative z-10">
        <div className="p-12 md:p-20 glass rounded-[4rem] text-center border-crimson-600/20">
          <span className="text-[10px] font-black tracking-[0.5em] uppercase text-crimson-600">Recognition</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mt-8 dark:text-white uppercase leading-tight">
            "Driving <span className="text-crimson-600 italic">Change</span> through NGO-based <span className="bg-gradient-to-r from-crimson-600 to-crimson-950 bg-clip-text text-transparent">Social Outreach</span> Programs."
          </h2>
        </div>
      </section>
      {/* Footer */}
      <footer id="contact" className="py-40 text-center relative z-10 border-t border-slate-200 dark:border-white/5">
        <span className="text-xs font-black tracking-[0.6em] uppercase text-crimson-600 mb-10 block">Connect</span>
        <h3 className="text-4xl md:text-7xl font-black tracking-tighter uppercase dark:text-white mb-16">
          LET'S BUILD THE <span className="text-crimson-600 italic">UNIMAGINED.</span>
        </h3>
        
        <div className="flex flex-col items-center gap-6 mb-16">
            <a href="mailto:mahilovejeet27@gmail.com" className="flex items-center gap-3 text-xl md:text-3xl font-black dark:text-white hover:text-crimson-600 transition">
                <Mail className="w-6 h-6" /> mahilovejeet27@gmail.com
            </a>
            <p className="flex items-center gap-3 text-lg md:text-2xl font-bold text-slate-500 tracking-widest">
                <Phone className="w-5 h-5" /> +91-8360128621
            </p>
        </div>

        <div className="flex justify-center gap-8">
          <a href="https://github.com/Lovejeetmahi" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:text-crimson-600 transition shadow-xl"><Github /></a>
          <a href="https://linkedin.com/in/lovejeet-mahi" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:text-crimson-600 transition shadow-xl"><Linkedin /></a>
        </div>
      </footer>
    </div>
  );
}