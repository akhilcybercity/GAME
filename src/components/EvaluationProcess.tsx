import React from 'react';
import { cn } from '@/lib/utils';

const EvaluationProcess = () => {
  const evaluationSteps = [
    {
      number: "01",
      title: "Initial Screening",
      description: "Review of academic background, relevant coursework, and basic qualifications",
      details: [
        "Online application form review",
        "Basic programming challenge",
        "Statement of interest assessment"
      ],
    },
    {
      number: "02",
      title: "Technical Assessment",
      description: "Evaluation of technical skills and problem-solving capabilities",
      details: [
        "Game development mini-challenge",
        "Code review and architecture test",
        "Technical knowledge assessment"
      ],
    },
    {
      number: "03",
      title: "Creative Portfolio Review",
      description: "Analysis of creative work, game designs, and artistic capabilities",
      details: [
        "Portfolio presentation",
        "Game design document evaluation",
        "Visual and narrative skills assessment"
      ],
    },
    {
      number: "04",
      title: "Collaborative Challenge",
      description: "Observation of teamwork, communication, and project contribution",
      details: [
        "Group game jam session",
        "Team dynamics assessment",
        "Communication skill evaluation"
      ],
    },
    {
      number: "05",
      title: "Final Interview",
      description: "Comprehensive discussion of goals, passion, and long-term potential",
      details: [
        "Passion and motivation assessment",
        "Industry knowledge evaluation",
        "Career goals alignment"
      ],
    }
  ];

  const handleLearnMoreClick = () => {
    window.location.href = "mailto:support@example.com?subject=Inquiry About Evaluation Process&body=Hello, I would like to know more about your evaluation process.";
  };

  return (
    <section id="evaluation" className="py-20 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-4 animate-fade-in">
            Evaluation Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-in animate-delay-100">
            A <span className="text-gradient">Multi-Stage Approach</span> to Assessment
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in animate-delay-200">
            Our evaluation methodology ensures thorough assessment across multiple dimensions, providing candidates with diverse opportunities to demonstrate their talents.
          </p>
        </div>
        <div className="space-y-8 relative">
          {evaluationSteps.map((step, index) => (
            <div 
              key={index} 
              className={cn(
                "flex flex-col sm:flex-row items-start gap-6 relative z-10",
                "animate-slide-right",
                `animate-delay-${index * 100}`
              )}
            >
              <div className="flex-none">
                <div className="w-[100px] h-[100px] md:w-[125px] md:h-[125px] rounded-3xl glass-panel flex items-center justify-center animate-float">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900">{step.number}</span>
                </div>
              </div>
              <div className="glass-card rounded-2xl p-6 md:p-8 flex-1">
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center animate-fade-in animate-delay-500">
          <button 
            className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-3 px-8 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:translate-y-[-2px]"
            onClick={handleLearnMoreClick}
          >
            Learn More About Our Process
          </button>
        </div>
      </div>
    </section>
  );
};

export default EvaluationProcess;
