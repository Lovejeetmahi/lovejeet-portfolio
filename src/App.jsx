import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { Download, Moon, Sun, Github, Linkedin, ArrowRight, Mail, Phone, GraduationCap } from 'lucide-react';

// --- DATA ARRAYS ---

const education = [
  { 
    degree: 'B.Tech in Computer Science', 
    school: 'Lovely Professional University', 
    year: '2023 - 2027', 
    score: 'CGPA: 6.2', 
    status: 'Pursuing' 
  },
  { 
    degree: 'Senior Secondary (12th)', 
    school: 'Dr. Asa Nand Sen Sec School', 
    year: '2021 - 2023', 
    score: '86%', 
    status: 'Completed' 
  },
  { 
    degree: 'Secondary (10th)', 
    school: "St. Joseph's Convent School", 
    year: '2008 - 2021', 
    score: '92%', 
    status: 'Completed' 
  }
];

const skills = [
  { cat: 'Languages', items: 'C, C++, JS, PHP, Java, Python' },
  { cat: 'Frontend', items: 'HTML5, CSS3, React, Tailwind' },
  { cat: 'Backend', items: 'Node.js, Express, PHP' },
  { cat: 'Data Control', items: 'MySQL, MongoDB Architecture' }
];

const projects = [
  { title: 'Library Management System', tech: 'PHP / MySQL', desc: 'Advanced inventory system with smooth API integration.', icon: '📚', link: 'https://library-management-system-ff1i.vercel.app/' },
  { title: 'Last-Mile Route Planning', tech: 'JS / PHP / MySQL', desc: 'Logistics optimization tool with shareable reports.', icon: '📍', link: '#' },
  { title: 'Cookiify', tech: 'React / Tailwind / Vercel', desc: 'Modern culinary exploration platform.', icon: '🍪', link: 'https://cookiify.vercel.app/' }
];

const certs = [
  { org: 'Rice University', title: 'Interpersonal Communication', date: 'Jan 2026', icon: '📜', pdf: '/interpersonal communication.pdf' },
  { org: 'Udemy', title: 'PHP Laravel Masterclass', date: 'Jan 2026', icon: '🛠️', pdf: '/udemy laravel.pdf' },
  { org: 'NPTEL', title: 'Privacy & Security', date: 'Apr 2025', icon: '🛡️', pdf: '/Privacy and Security in Online Social Media.pdf' },
  { org: 'LPU', title: 'JAVA Development', date: 'July 2025', icon: '☕', pdf: '/Summer training.pdf' }
];

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const tiltRefs = useRef([]);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    VanillaTilt.init(tiltRefs.current, { max: 5, speed: 400, glare: true, "max-glare": 0.1 });
  }, []);

  return (
    <div className="min-h-screen scroll-smooth">
      <div className="plasma top-[-10%] left-[-5%] animate-pulse" />
      <div className="plasma bottom-[-10%] right-[-5%] opacity-50" />

      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl glass rounded-full px-6 md:px-10 h-20 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-crimson-600 to-crimson-900 rounded-lg shadow-lg" />
          <span className="text-xl font-black tracking-tighter uppercase dark:text-white text-slate-900">
            LOVEJEET MAHI
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] dark:text-slate-300 text-slate-600">
          <a href="#home" className="hover:text-crimson-600 transition">Home</a>
          <a href="#skills" className="hover:text-crimson-600 transition">Skills</a>
          <a href="#projects" className="hover:text-crimson-600 transition">Projects</a>
          <a href="#vault" className="hover:text-crimson-600 transition">Vault</a>
          <a href="#impact" className="hover:text-crimson-600 transition">Impact</a>
          <a href="#education" className="hover:text-crimson-600 transition">Education</a>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDark(!isDark)} className="w-10 h-10 glass rounded-full flex items-center justify-center hover:border-crimson-600 transition cursor-pointer">
            {isDark ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-slate-800" />}
          </button>
          <a href="/Lovejeet_Mahi_Resume.pdf" download className="hidden sm:block px-6 py-2 bg-crimson-600 text-white rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-crimson-700 transition">Resume</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-64 pb-20 px-6 flex flex-col items-center text-center z-10">
        <div className="relative w-64 h-64 md:w-80 md:h-80 glass rounded-[4rem] p-4 mb-12 shadow-2xl">
          {/* UPDATED: Removed 'grayscale' class so photo is always in color */}
          <img 
            src="/myphoto.png" 
            alt="Lovejeet Mahi" 
            className="w-full h-full object-cover rounded-[3.5rem] transition-all duration-1000" 
          />
        </div>

        <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter leading-none mb-10 dark:text-white text-slate-900">
          DESIGNING<br />
          <span className="bg-gradient-to-r from-crimson-500 via-crimson-600 to-crimson-900 bg-clip-text text-transparent">SYSTEMS.</span>
        </h1>
        <p className="max-w-xl text-lg font-bold dark:text-slate-400 text-slate-600">
          I am Lovejeet Mahi. A Full-Stack Architect specialized in digital ecosystems, currently at <span className="text-crimson-600">LPU</span>.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32 px-6 max-w-7xl mx-auto z-10">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 italic dark:text-white text-slate-900 uppercase">Tech Stack.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div key={i} ref={el => tiltRefs.current[i] = el} className="p-10 glass rounded-[3rem] hover:border-crimson-600 transition-all group">
              <h3 className="text-xl font-black mb-4 dark:text-white text-slate-900 uppercase">{skill.cat}</h3>
              <p className="text-sm font-bold dark:text-slate-500 text-slate-500">{skill.items}</p>
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
              <h3 className="text-3xl font-black mb-4 uppercase text-white">{proj.title}</h3>
              <p className="text-slate-400 text-lg mb-10">{proj.desc}</p>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black tracking-widest text-crimson-600 uppercase">{proj.tech}</span>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-crimson-600 transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vault */}
      <section id="vault" className="py-32 px-6 max-w-7xl mx-auto z-10">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-20 dark:text-white text-slate-900 uppercase">The Vault.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
            <div key={i} className="p-10 glass rounded-[3rem] hover:border-crimson-600 transition-all group">
              <h3 className="text-xl font-black mb-2 dark:text-white text-slate-900 uppercase leading-tight">{cert.title}</h3>
              <p className="text-slate-500 font-bold italic mb-8 uppercase text-[10px]">{cert.org}</p>
              <a href={cert.pdf} download className="flex items-center gap-2 text-[10px] font-black text-crimson-600 uppercase tracking-widest group-hover:gap-4 transition-all">
                Download <Download className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </section>
      
      {/* Impact Section (Achievement) */}
      <section id="impact" className="py-20 px-6 max-w-5xl mx-auto z-10">
        <div className="p-12 md:p-20 glass rounded-[4rem] text-center border-crimson-600/20">
          <span className="text-[10px] font-black tracking-[0.5em] uppercase text-crimson-600">Recognition</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mt-8 dark:text-white text-slate-900 uppercase leading-tight">
            "Driving <span className="text-crimson-600 italic">Change</span> through Social Outreach."
          </h2>
        </div>
      </section>

      {/* EDUCATION SECTION (Placed directly under Impact) */}
      <section id="education" className="py-32 px-6 max-w-6xl mx-auto z-10">
        <div className="mb-20 text-center md:text-left">
          <span className="text-[10px] font-black tracking-[0.5em] uppercase text-crimson-600">Journey</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 italic dark:text-white text-slate-900 uppercase">Education.</h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, i) => (
            <div key={i} className="p-10 glass rounded-[3rem] border-l-8 border-crimson-600 hover:scale-[1.02] transition-transform duration-500">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="w-6 h-6 text-crimson-600" />
                    <span className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">{edu.year}</span>
                    <span className="px-3 py-1 rounded-full bg-crimson-600/10 text-crimson-600 text-[10px] font-black uppercase tracking-wider">{edu.status}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase dark:text-white text-black mb-2">{edu.degree}</h3>
                  <p className="text-lg font-bold text-slate-600 dark:text-slate-300">{edu.school}</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl md:text-5xl font-black text-slate-400 dark:text-white/20">{edu.score}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Footer */}
      <footer id="contact" className="py-40 text-center relative z-10 border-t dark:border-white/5 border-slate-200">
        <h3 className="text-4xl md:text-7xl font-black tracking-tighter uppercase dark:text-white text-slate-900 mb-16">
          LET'S BUILD THE <span className="text-crimson-600 italic">UNIMAGINED.</span>
        </h3>
        <div className="flex flex-col items-center gap-6 mb-16">
          <a href="mailto:mahilovejeet27@gmail.com" className="flex items-center gap-3 text-xl md:text-3xl font-black dark:text-white text-slate-900 hover:text-crimson-600 transition">
            <Mail className="w-6 h-6" /> mahilovejeet27@gmail.com
          </a>
          <p className="text-lg md:text-2xl font-bold text-slate-500">+91-8360128621</p>
        </div>
        <div className="flex justify-center gap-8">
          <a href="https://github.com/Lovejeetmahi" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:text-crimson-600 transition shadow-xl"><Github /></a>
          <a href="https://linkedin.com/in/lovejeet-mahi" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:text-crimson-600 transition shadow-xl"><Linkedin /></a>
        </div>
      </footer>
    </div>
  );
}