import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      
      <footer className="bg-gray-900 py-6 text-center text-gray-400">
        <p>© {new Date().getFullYear()} - Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;