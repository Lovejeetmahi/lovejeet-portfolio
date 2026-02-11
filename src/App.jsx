import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import VanillaTilt from 'vanilla-tilt';
import { Download, Moon, Sun, Github, Linkedin, ArrowRight, Mail, GraduationCap } from 'lucide-react';

const BurningAtmosphere = () => {
  const embers = Array.from({ length: 40 });
  const soot = Array.from({ length: 30 });
  const flames = Array.from({ length: 12 });

  return (
    <>
      {/* Heat Distortion Layer */}
      <div className="heat-distortion" />

      {/* Embers (Glowing) */}
      <div className="fixed inset-0 pointer-events-none z-[61]">
        {embers.map((_, i) => (
          <div key={`e-${i}`} className="ember" style={{
            width: Math.random() * 4 + 1 + 'px',
            height: Math.random() * 4 + 1 + 'px',
            left: Math.random() * 100 + '%',
            animationDuration: Math.random() * 5 + 4 + 's',
            animationDelay: Math.random() * 10 + 's'
          }} />
        ))}
      </div>

      {/* Soot (Dark particles) */}
      <div className="fixed inset-0 pointer-events-none z-[58]">
        {soot.map((_, i) => (
          <div key={`s-${i}`} className="soot" style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            left: Math.random() * 100 + '%',
            animationDuration: Math.random() * 8 + 6 + 's',
            animationDelay: Math.random() * 10 + 's'
          }} />
        ))}
      </div>

      {/* The Inferno Base */}
      <div className="fire-pit">
        <div className="flame-main" />
        {flames.map((_, i) => (
          <div key={`f-${i}`} className="realistic-flame" style={{
            width: Math.random() * 100 + 50 + 'px',
            height: Math.random() * 100 + 50 + 'px',
            left: `${i * 8}%`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: 0.6 + Math.random() * 0.4
          }} />
        ))}
      </div>
    </>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const tiltRefs = useRef([]);

  const education = [
    { degree: 'B.Tech in Computer Science', school: 'Lovely Professional University', year: '2023 - 2027', score: 'CGPA: 6.2', status: 'Pursuing' },
    { degree: 'Senior Secondary (12th)', school: 'Dr. Asa Nand Sen Sec School', year: '2021 - 2023', score: '86%', status: 'Completed' }
  ];

  useEffect(() => {
    VanillaTilt.init(tiltRefs.current, { max: 10, speed: 1000, glare: true, "max-glare": 0.2 });
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-700 ${isDark ? 'dark' : 'light'}`}>
      <BurningAtmosphere />

      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl glass rounded-full px-10 h-24 flex items-center justify-between shadow-[0_0_50px_rgba(255,69,0,0.2)]">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-red-600 rounded-xl shadow-[0_0_20px_#ff4500] animate-pulse" />
          <span className="text-2xl font-black dark:text-white text-slate-900 tracking-tighter">LOVEJEET MAHI</span>
        </div>
        
        <div className="flex items-center gap-6">
          <button onClick={() => setIsDark(!isDark)} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition">
            {isDark ? <Sun className="text-yellow-400" /> : <Moon className="text-red-600" />}
          </button>
          <button className="px-8 py-3 bg-red-600 text-white rounded-full font-black uppercase tracking-tighter hover:bg-red-700 transition shadow-lg">Resume</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-72 pb-40 text-center z-10 px-6">
        <h1 className="text-[10rem] md:text-[15rem] font-black leading-none tracking-tighter dark:text-white text-slate-900">
          DESIGNING<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-red-800 via-red-500 to-yellow-500 animate-gradient-y">SYSTEMS.</span>
        </h1>
        <p className="mt-10 text-2xl font-bold dark:text-red-100 text-slate-700 max-w-2xl mx-auto">
          A Full-Stack Architect specialized in digital ecosystems. Currently at <span className="text-red-600 italic">LPU</span>.
        </p>
      </section>

      {/* Education */}
      <section className="max-w-6xl mx-auto py-40 px-6 z-10 relative">
        <h2 className="text-8xl font-black italic dark:text-white text-slate-900 mb-20 uppercase">Education.</h2>
        <div className="space-y-10">
          {education.map((edu, i) => (
            <div key={i} ref={el => tiltRefs.current[i] = el} className="p-12 glass rounded-[4rem] border-l-[15px] border-red-600 flex justify-between items-center group overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-4xl font-black dark:text-white text-black mb-2">{edu.degree}</h3>
                  <p className="text-xl dark:text-red-200 text-slate-600">{edu.school}</p>
                  <span className="text-sm font-black uppercase tracking-widest text-red-600">{edu.year}</span>
               </div>
               <div className="text-7xl font-black opacity-20 group-hover:opacity-100 transition-opacity text-red-600">{edu.score}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-40 text-center z-10 relative border-t border-red-900/20">
        <h3 className="text-6xl font-black dark:text-white text-slate-900 uppercase">Let's build the <span className="text-red-600 italic">Unimagined.</span></h3>
        <p className="mt-10 text-xl font-bold text-slate-500">Registration: 12311757</p>
      </footer>
    </div>
  );
}