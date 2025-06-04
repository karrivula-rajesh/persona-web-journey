
import React from 'react';
import { Card } from '@/components/ui/card';
import { Code, Palette, Coffee, Heart } from 'lucide-react';

const Introduction = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design Focus",
      description: "Creating intuitive user experiences"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Turning complex challenges into simple solutions"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passionate",
      description: "Love what I do and it shows in my work"
    }
  ];

  return (
    <div className="flex items-center min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience 
              creating digital solutions that make a difference. My journey began with 
              a curiosity about how things work and evolved into a love for building 
              applications that solve real-world problems.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or enjoying a good cup of coffee 
              while brainstorming the next big idea. I believe in continuous learning 
              and staying ahead of the curve in this ever-evolving field.
            </p>

            <div className="pt-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What drives me</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Creating meaningful user experiences
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Solving complex problems with elegant solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Collaborating with talented teams
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Continuous learning and growth
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                <div className="text-blue-600 mb-4">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
