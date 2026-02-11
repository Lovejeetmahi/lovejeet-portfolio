import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Sun, Moon, Github, Linkedin, Mail, GraduationCap } from 'lucide-react';

const InfernoAtmosphere = () => {
  // Increased density of ash/embers to match reference
  const embers = Array.from({ length: 85 }); 
  const flameTongues = Array.from({ length: 15 });

  return (
    <>
      <div className="smoke-layer" />
      
      {/* High Density Embers */}
      <div className="fixed inset-0 pointer-events-none z-[61]">
        {embers.map((_, i) => {
          const size = Math.random() * 3 + 1.5 + 'px';
          const delay = Math.random() * 15 + 's';
          const duration = Math.random() * 7 + 4 + 's';
          const left = Math.random() * 100 + '%';
          const colors = ['#ff9d00', '#ff4500', '#ffd700', '#fff']; // Multi-color sparks
          return (
            <div 
              key={i} 
              className="ember-particle" 
              style={{ 
                width: size, height: size, left, 
                animationDelay: delay, 
                animationDuration: duration,
                backgroundColor: colors[Math.floor(Math.random() * colors.length)]
              }} 
            />
          );
        })}
      </div>

      {/* Realistic Fireplace Base */}
      <div className="fireplace-container">
        <div className="fire-base-glow" />
        {flameTongues.map((_, i) => (
          <div 
            key={i} 
            className="flame-tongue" 
            style={{ 
              left: `${Math.random() * 100}%`, 
              height: `${100 + Math.random() * 80}px`,
              width: `${30 + Math.random() * 40}px`,
              animationDelay: `${Math.random() * 0.5}s`,
              opacity: 0.5 + Math.random() * 0.5
            }} 
          />
        ))}
      </div>
    </>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`min-h-screen transition-all duration-700 ${isDark ? 'bg-[#050505] text-white' : 'bg-[#fffaf0] text-slate-900'}`}>
      <InfernoAtmosphere />

      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl glass rounded-full px-8 h-24 flex items-center justify-between shadow-[0_0_40px_rgba(255,69,0,0.3)]">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-red-600 rounded-lg shadow-[0_0_15px_#ff4500] animate-pulse" />
          <span className="text-xl font-black tracking-tighter uppercase">LOVEJEET MAHI</span>
        </div>
        <div className="flex gap-4">
          <button onClick={() => setIsDark(!isDark)} className="w-12 h-12 glass rounded-full flex items-center justify-center">
            {isDark ? <Sun className="text-yellow-400" /> : <Moon className="text-red-600" />}
          </button>
          <button className="px-6 py-2 bg-red-600 rounded-full font-black uppercase text-xs tracking-widest shadow-lg">Resume</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-80 pb-40 text-center z-10 px-6">
        <h1 className="text-[9rem] md:text-[14rem] font-black leading-none tracking-tighter">
          DESIGNING<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-red-800 via-red-500 to-yellow-500">SYSTEMS.</span>
        </h1>
        <p className="mt-8 text-xl font-bold opacity-80 max-w-xl mx-auto">
          Full-Stack Architect specialized in digital ecosystems. Currently studying B.Tech CSE at LPU.
        </p>
      </section>

      {/* Content Placeholder for Education/Vault */}
      <section className="py-20 px-6 max-w-6xl mx-auto z-10 relative">
        <h2 className="text-6xl font-black italic mb-12 uppercase">The Journey.</h2>
        <div className="p-12 glass rounded-[3rem] border-l-8 border-red-600">
           <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-red-600" />
              <span className="font-bold">2023 - 2027</span>
           </div>
           <h3 className="text-3xl font-black uppercase">B.Tech in Computer Science</h3>
           <p className="text-lg opacity-60">Lovely Professional University | CGPA: 6.2</p>
        </div>
      </section>

      <footer className="py-40 text-center z-10 relative border-t border-white/5">
        <div className="flex justify-center gap-8 mb-10">
          <a href="https://github.com/Lovejeetmahi" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:text-red-600 transition"><Github /></a>
          <a href="https://linkedin.com/in/lovejeet-mahi" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:text-red-600 transition"><Linkedin /></a>
        </div>
        <p className="font-bold text-slate-500">mahilovejeet27@gmail.com</p>
      </footer>
    </div>
  );
}