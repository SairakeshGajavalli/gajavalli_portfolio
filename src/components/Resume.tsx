import React from 'react';
import { FileText, Download, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Resume() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description: "Led development of enterprise applications using React, Node.js, and AWS."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Co.",
      period: "2018 - 2020",
      description: "Developed and maintained multiple client projects using modern web technologies."
    }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      school: "Tech University",
      period: "2016 - 2018"
    },
    {
      degree: "Bachelor of Computer Science",
      school: "State University",
      period: "2012 - 2016"
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer"
  ];

  return (
    <section id="resume" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8 animate-slide-up">Resume</h2>
          <a
            href="/path-to-your-resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300"
          >
            <FileText size={20} />
            Download Resume
            <Download size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-blue-400" size={24} />
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300"
                  >
                    <h4 className="text-xl font-semibold text-blue-400">{exp.title}</h4>
                    <p className="text-gray-300 mb-2">{exp.company} | {exp.period}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-blue-400" size={24} />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300"
                  >
                    <h4 className="text-xl font-semibold text-blue-400">{edu.degree}</h4>
                    <p className="text-gray-300">{edu.school}</p>
                    <p className="text-gray-400">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-blue-400" size={24} />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <Award size={16} className="text-blue-400" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}