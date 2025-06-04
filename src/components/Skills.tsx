
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95, color: "bg-blue-500" },
        { name: "TypeScript", level: 90, color: "bg-blue-600" },
        { name: "Vue.js", level: 85, color: "bg-green-500" },
        { name: "Tailwind CSS", level: 95, color: "bg-cyan-500" },
        { name: "HTML/CSS", level: 98, color: "bg-orange-500" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90, color: "bg-green-600" },
        { name: "Python", level: 88, color: "bg-yellow-500" },
        { name: "PostgreSQL", level: 85, color: "bg-blue-700" },
        { name: "MongoDB", level: 82, color: "bg-green-700" },
        { name: "GraphQL", level: 80, color: "bg-pink-500" }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "AWS", level: 88, color: "bg-orange-600" },
        { name: "Docker", level: 85, color: "bg-blue-400" },
        { name: "Kubernetes", level: 75, color: "bg-purple-500" },
        { name: "Git", level: 95, color: "bg-red-500" },
        { name: "CI/CD", level: 82, color: "bg-indigo-500" }
      ]
    },
    {
      title: "Design & Others",
      skills: [
        { name: "UI/UX Design", level: 85, color: "bg-purple-600" },
        { name: "Figma", level: 88, color: "bg-pink-600" },
        { name: "Agile/Scrum", level: 90, color: "bg-teal-500" },
        { name: "System Design", level: 83, color: "bg-gray-600" },
        { name: "Testing", level: 87, color: "bg-emerald-500" }
      ]
    }
  ];

  const tools = [
    "VS Code", "IntelliJ IDEA", "Postman", "Jira", "Slack", "Notion",
    "Adobe Creative Suite", "Sketch", "Vercel", "Netlify", "Firebase", "Supabase"
  ];

  return (
    <div className="flex items-center min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="p-8 hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mr-3"></div>
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-sm text-gray-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-gray-200 group-hover:bg-gray-300 transition-colors"
                      />
                      <div 
                        className={`absolute top-0 left-0 h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 border-0">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Tools & Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 hover:bg-white"
              >
                {tool}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
