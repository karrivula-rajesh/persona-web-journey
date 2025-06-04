
import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com',
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:alex@example.com',
      color: 'hover:text-red-600'
    }
  ];

  return (
    <footer className="bg-white/90 backdrop-blur-md border-t border-gray-200/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and innovation.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-gray-100 rounded-full text-gray-600 ${link.color} transition-all duration-200 transform hover:scale-110 hover:bg-gray-200`}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-500 text-sm">
              © 2024 Alex Johnson. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-gray-400 text-xs mt-2 flex items-center justify-center">
              Made with <span className="text-red-500 mx-1">♥</span> and lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
