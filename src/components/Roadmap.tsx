import React from 'react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

const Roadmap = () => {
  const navigate = useNavigate();

  const milestones = [
    {
      month: "January - February",
      title: "Program Launch & Outreach",
      description: "Initiate partnerships with educational institutions and announce the talent identification program.",
      tasks: [
        "Establish connections with 50+ schools and colleges",
        "Create and distribute promotional materials",
        "Develop the online application platform",
        "Host informational webinars for faculty and students"
      ]
    },
    {
      month: "March - April",
      title: "Application Period",
      description: "Open applications and conduct initial screening of candidates.",
      tasks: [
        "Process applications on a rolling basis",
        "Conduct preliminary technical assessments",
        "Review initial portfolios and statements of interest",
        "Shortlist candidates for the next evaluation phase"
      ]
    },
    {
      month: "May - June",
      title: "In-Depth Evaluation",
      description: "Execute comprehensive assessment of shortlisted candidates.",
      tasks: [
        "Organize regional game development hackathons",
        "Conduct technical and creative skills evaluation",
        "Perform collaborative challenge sessions",
        "Schedule final interviews with promising candidates"
      ]
    },
    {
      month: "July - August",
      title: "Selection & Preparation",
      description: "Finalize selections and prepare for the mentorship program.",
      tasks: [
        "Announce final selections",
        "Match mentors with selected students",
        "Distribute program materials and resources",
        "Conduct orientation sessions for participants"
      ]
    },
    {
      month: "September - December",
      title: "Mentorship & Development",
      description: "Execute the core mentorship program and skill development activities.",
      tasks: [
        "Facilitate weekly mentorship sessions",
        "Organize specialized workshops and masterclasses",
        "Implement progressive project challenges",
        "Monitor and evaluate participant progress"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4 animate-fade-in">
            Implementation Roadmap
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-in animate-delay-100">
            Turning Vision into <span className="text-gradient">Reality</span>
          </h2>
          
          <p className="text-lg text-gray-600 animate-fade-in animate-delay-200">
            Our comprehensive roadmap outlines the key phases and milestones for implementing the talent identification and development program.
          </p>
        </div>
        
        <div className="space-y-6 mb-12">
          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className={cn(
                "glass-card rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 ease-in-out",
                "animate-slide-up",
                `animate-delay-${index * 100}`
              )}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-1/4">
                  <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg inline-block font-medium">
                    {milestone.month}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mt-2">{milestone.title}</h3>
                </div>
                
                <div className="md:w-3/4">
                  <p className="text-gray-700 mb-4">{milestone.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {milestone.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-start">
                        <div className="flex-none mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-2 text-gray-600 text-sm">{task}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="glass-panel rounded-2xl p-8 animate-fade-in animate-delay-500">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Ready to implement our talent identification strategy?</h3>
              <p className="text-gray-600">Our team can help you customize this roadmap to fit your specific needs and timeline requirements.</p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <button 
                onClick={() => navigate('/application-portal')} 
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:translate-y-[-2px]"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
