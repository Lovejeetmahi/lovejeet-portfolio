import React, { useEffect, useRef, useState } from 'react';
import './App.css'; 
import VanillaTilt from 'vanilla-tilt';
import { Download, Moon, Sun, Github, Linkedin, ArrowRight, Mail, GraduationCap } from 'lucide-react';

// --- ASH COMPONENT ---
const AshSystem = () => {
  const ashes = Array.from({ length: 60 }); 
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[55]">
      {ashes.map((_, i) => {
        const size = Math.random() * 4 + 2 + 'px';
        const delay = Math.random() * 12 + 's';
        const duration = Math.random() * 10 + 7 + 's';
        const left = Math.random() * 100 + '%';
        return (
          <div 
            key={i} 
            className="ash-particle" 
            style={{ 
              width: size, 
              height: size, 
              left, 
              animationDelay: delay, 
              animationDuration: duration 
            }} 
          />
        );
      })}
    </div>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const tiltRefs = useRef([]);

  // Data Integrated from Profile
  const education = [
    { degree: 'B.Tech in Computer Science', school: 'Lovely Professional University', year: '2023 - 2027', score: 'CGPA: 6.2', status: 'Pursuing' },
    { degree: 'Senior Secondary (12th)', school: 'Dr. Asa Nand Sen Sec School', year: '2021 - 2023', score: '86%', status: 'Completed' },
    { degree: 'Secondary (10th)', school: "St. Joseph's Convent School", year: '2008 - 2021', score: '92%', status: 'Completed' }
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

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    VanillaTilt.init(tiltRefs.current, { max: 5, speed: 400, glare: true, "max-glare": 0.1 });
  }, []);

  return (
    <div className={`min-h-screen scroll-smooth transition-colors duration-700 ${isDark ? 'bg-[#050505]' : 'bg-slate-50'}`}>
      
      {/* PERSISTENT EFFECTS */}
      <AshSystem />
      
      <div className="fire-container">
        <div className="fire-glow" />
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="flame" 
            style={{ 
                left: `${10 + i * 12}%`, 
                animationDelay: `${i * 0.2}s`,
                height: `${50 + Math.random() * 40}px`,
                width: `${40 + Math.random() * 25}px`
            }} 
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl glass rounded-full px-6 md:px-10 h-20 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-900 rounded-lg shadow-lg" />
          <span className="text-xl font-black tracking-tighter uppercase dark:text-white text-slate-900">
            LOVEJEET MAHI
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsDark(!isDark)} 
            className="w-10 h-10 glass rounded-full flex items-center justify-center hover:border-red-600 transition cursor-pointer"
          >
            {isDark ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-slate-800" />}
          </button>
          <a href="#" className="hidden sm:block px-6 py-2 bg-red-600 text-white rounded-full text-[10px] font-black tracking-widest uppercase">Resume</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative pt-64 pb-20 px-6 flex flex-col items-center text-center z-10">
        <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter leading-none mb-10 dark:text-white text-slate-900">
          DESIGNING<br />
          <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-900 bg-clip-text text-transparent">SYSTEMS.</span>
        </h1>
        <p className="max-w-xl text-lg font-bold dark:text-slate-400 text-slate-600">
          Full-Stack Architect specialized in digital ecosystems. Registration: 12311757.
        </p>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-6 max-w-6xl mx-auto z-10">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic dark:text-white text-slate-900 uppercase mb-16 text-left">Education.</h2>
        <div className="space-y-8 text-left">
          {education.map((edu, i) => (
            <div key={i} className="p-10 glass rounded-[3rem] border-l-8 border-red-600">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="w-6 h-6 text-red-600" />
                    <span className="text-xs font-black uppercase tracking-widest text-slate-500">{edu.year}</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase dark:text-white text-black mb-2">{edu.degree}</h3>
                  <p className="text-lg font-bold text-slate-600 dark:text-slate-300">{edu.school}</p>
                </div>
                <div className="text-4xl font-black text-slate-400 dark:text-white/20">{edu.score}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-20 text-center relative z-10 border-t dark:border-white/5 border-slate-200">
        <div className="flex justify-center gap-8">
          <a href="https://github.com/Lovejeetmahi" className="w-14 h-14 glass rounded-2xl flex items-center justify-center dark:text-white text-slate-900"><Github /></a>
          <a href="https://linkedin.com/in/lovejeet-mahi" className="w-14 h-14 glass rounded-2xl flex items-center justify-center dark:text-white text-slate-900"><Linkedin /></a>
        </div>
      </footer>
    </div>
  );
}