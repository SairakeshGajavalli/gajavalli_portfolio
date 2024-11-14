import React from 'react';
import { Code2, Database, Layout, Server } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="w-8 h-8 text-blue-400" />,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux"]
    },
    {
      category: "Backend",
      icon: <Server className="w-8 h-8 text-emerald-400" />,
      technologies: ["Node.js", "Express", "Python", "Django", "FastAPI"]
    },
    {
      category: "Database",
      icon: <Database className="w-8 h-8 text-purple-400" />,
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma"]
    },
    {
      category: "DevOps",
      icon: <Code2 className="w-8 h-8 text-orange-400" />,
      technologies: ["Docker", "AWS", "CI/CD", "Git", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-4s' }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 animate-slide-up">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.category} 
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="transform group-hover:rotate-12 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.technologies.map((tech, techIndex) => (
                  <li 
                    key={tech} 
                    className="text-gray-300 animate-slide-in-right"
                    style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s` }}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}