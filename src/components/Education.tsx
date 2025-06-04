
import React from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      period: "2018 - 2020",
      description: "Specialized in Artificial Intelligence and Machine Learning. Graduated Summa Cum Laude with a 3.9 GPA.",
      achievements: [
        "Dean's List all semesters",
        "Research Assistant in AI Lab",
        "Published 2 papers on neural networks"
      ]
    },
    {
      degree: "Bachelor of Software Engineering",
      institution: "University of California, Berkeley",
      period: "2014 - 2018",
      description: "Comprehensive foundation in software development, algorithms, and system design.",
      achievements: [
        "Magna Cum Laude graduate",
        "President of Computer Science Club",
        "Winner of Annual Hackathon 2017"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: <Award className="w-5 h-5" />
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2022",
      icon: <Award className="w-5 h-5" />
    },
    {
      name: "React Advanced Certification",
      issuer: "Meta",
      year: "2022",
      icon: <Award className="w-5 h-5" />
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "CNCF",
      year: "2021",
      icon: <Award className="w-5 h-5" />
    }
  ];

  return (
    <div className="flex items-center min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning is at the heart of my professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="text-blue-600 font-medium mb-1">{edu.institution}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.period}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{edu.description}</p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Key Achievements
                </h4>
                <ul className="space-y-1">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">
                    {cert.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">{cert.name}</h4>
                <p className="text-blue-600 text-sm font-medium mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-xs">{cert.year}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
