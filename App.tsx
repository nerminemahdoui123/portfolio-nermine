
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar/Navbar';
import { Hero } from './components/sections/Hero/Hero';
import { About } from './components/sections/About/About';
import { Experience } from './components/sections/Experience/Experience';
import { Projects } from './components/sections/Projects/Projects';
import { Contact } from './components/sections/Contact/Contact';
import { Footer } from './components/layout/Footer/Footer';
import { Landing } from './components/layout/Landing/Landing';
import { ScrollNav } from './components/ui/ScrollNav/ScrollNav';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const entered = sessionStorage.getItem('portfolio_entered');
    if (entered) setHasEntered(true);
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
    sessionStorage.setItem('portfolio_entered', 'true');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      {!hasEntered ? (
        <Landing onEnter={handleEnter} />
      ) : (
        <div className="animate-in fade-in zoom-in-95 duration-1000">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <ScrollNav />
        </div>
      )}
    </div>
  );
}
