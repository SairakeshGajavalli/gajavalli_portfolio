import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates and team collaboration features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Express", "MongoDB", "Socket.io"],
      github: "#",
      live: "#"
    },
    {
      title: "AI Content Generator",
      description: "Content generation platform using OpenAI's GPT-3 API with user management and content history.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Python", "FastAPI", "OpenAI"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 animate-slide-up">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute top-2 right-2">
                  <Star className="text-yellow-400 animate-glow" size={20} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-700/50 backdrop-blur-sm rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 hover:text-blue-400 transition-all hover:scale-110"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a 
                    href={project.live} 
                    className="flex items-center gap-2 hover:text-blue-400 transition-all hover:scale-110"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}