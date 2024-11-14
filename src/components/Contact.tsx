import React, { useState } from 'react';
import { Mail, Linkedin, Github, Sparkles, Send, FileText } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-8 animate-slide-up">
          Let's Connect
          <Sparkles className="inline-block ml-2 text-yellow-400 animate-glow" />
        </h2>
        <p className="text-xl text-gray-300 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          I'm always interested in hearing about new projects and opportunities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Mail, title: "Email", text: "your.email@example.com", href: "mailto:your.email@example.com" },
            { icon: Linkedin, title: "LinkedIn", text: "Connect with me", href: "https://linkedin.com" },
            { icon: Github, title: "GitHub", text: "See my code", href: "https://github.com" }
          ].map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <item.icon size={32} className="mx-auto mb-4 text-blue-400 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              <span className="block text-lg font-semibold mb-2">{item.title}</span>
              <span className="block text-gray-300">{item.text}</span>
            </a>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}