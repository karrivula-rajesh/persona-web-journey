
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToIntroduction = () => {
    const element = document.getElementById('introduction');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Professional headshot"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-lg border-4 border-white"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Hello, I'm
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
              Alex Johnson
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Full Stack Developer & UI/UX Designer passionate about creating beautiful, 
            functional digital experiences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToIntroduction}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get to know me
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-3 rounded-full transition-all duration-300"
            >
              View my work
            </Button>
          </div>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown 
            className="mx-auto text-gray-400 cursor-pointer hover:text-blue-600 transition-colors" 
            size={32}
            onClick={scrollToIntroduction}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
