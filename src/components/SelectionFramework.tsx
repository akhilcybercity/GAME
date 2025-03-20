
import React from 'react';
import { cn } from '@/lib/utils';

const SelectionFramework = () => {
  const criteria = [
    {
      category: "School Level",
      items: [
        "Basic programming knowledge (Python, JavaScript)",
        "Game engine familiarity (Unity, GameMaker)",
        "Creative storytelling ability",
        "Collaboration skills",
        "Interest in game design principles"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      category: "College Level",
      items: [
        "Advanced programming expertise",
        "3D/2D asset development skills",
        "Game AI implementation knowledge",
        "Understanding of game monetization",
        "Project leadership experience"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  const criteriaCategories = [
    {
      title: "Technical Competence",
      description: "Programming skills, game engine knowledge, and technical problem-solving abilities.",
      color: "blue"
    },
    {
      title: "Creative Innovation",
      description: "Game design, narrative development, visual arts, and creative problem-solving.",
      color: "purple"
    },
    {
      title: "Collaboration & Communication",
      description: "Teamwork, project management, communication, and leadership qualities.",
      color: "pink"
    },
    {
      title: "Portfolio Quality",
      description: "Completed projects, work samples, documentation, and presentation.",
      color: "orange"
    }
  ];

  return (
    <section id="framework" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4 animate-fade-in">
            Selection Framework
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-in animate-delay-100">
            Structured Criteria for <span className="text-gradient">Talent Identification</span>
          </h2>
          
          <p className="text-lg text-gray-600 animate-fade-in animate-delay-200">
            Our comprehensive selection framework is designed to identify and evaluate potential game development talent across various educational levels and skill domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {criteria.map((level, index) => (
            <div 
              key={index} 
              className={cn(
                "glass-card rounded-2xl p-8 transition-all duration-500 hover:translate-y-[-5px]",
                "animate-slide-up", 
                index === 1 ? "animate-delay-200" : ""
              )}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mr-4`}>
                  {level.icon}
                </div>
                <h3 className="text-2xl font-semibold">{level.category}</h3>
              </div>
              
              <ul className="space-y-4">
                {level.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white mr-3 text-xs">
                      {itemIndex + 1}
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in animate-delay-400">
          {criteriaCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 border-t-4 border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-xl font-semibold mb-3">{category.title}</h4>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectionFramework;
