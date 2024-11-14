import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Code, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6 animate-slide-up">
          <Code className="text-blue-400 animate-glow" />
          <span className="text-gray-400">Welcome to my portfolio</span>
          <Code className="text-blue-400 animate-glow" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Full Stack Developer
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Crafting robust web applications from front-end to back-end
          <Sparkles className="inline-block ml-2 text-yellow-400 animate-glow" />
        </p>
        
        <div className="flex gap-6 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <a href="https://github.com" 
             className="p-3 hover:text-blue-400 transition-all hover:scale-110 hover:rotate-6">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" 
             className="p-3 hover:text-blue-400 transition-all hover:scale-110 hover:-rotate-6">
            <Linkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com" 
             className="p-3 hover:text-blue-400 transition-all hover:scale-110 hover:rotate-6">
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </div>
  );
}