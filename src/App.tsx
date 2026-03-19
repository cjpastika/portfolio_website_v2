import { useState, useEffect } from 'react';
import BootSequence from './components/BootSequence';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  const [booted, setBooted] = useState(() => {
    return sessionStorage.getItem('bootCompleted') === 'true';
  });
  const [showSite, setShowSite] = useState(booted);

  const handleBootComplete = () => {
    sessionStorage.setItem('bootCompleted', 'true');
    setBooted(true);
  };

  useEffect(() => {
    if (booted && !showSite) {
      requestAnimationFrame(() => {
        setShowSite(true);
      });
    }
  }, [booted, showSite]);

  return (
    <>
      {!booted && <BootSequence onComplete={handleBootComplete} />}
      <div
        className="site-wrapper"
        style={{
          opacity: showSite ? 1 : 0,
          transform: showSite ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 600ms ease-out, transform 600ms ease-out',
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </>
  );
}
