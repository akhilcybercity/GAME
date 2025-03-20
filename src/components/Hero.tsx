import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Hero = () => {
  const handleLearnMore = () => {
    window.location.href = 'mailto:emailstoakhilkumarkm@gmail.com?subject=Inquiry about Game Development Program';
  };

  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      
      {/* Abstract Elements */}
      <div className="absolute top-20 right-[20%] w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-[15%] w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6 animate-fade-in">
            Discovering Next Generation Game Developers
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in animate-delay-100">
            Identifying <span className="text-gradient">Game Development</span> Talent
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in animate-delay-200">
            A structured approach to discover, evaluate, and nurture students with exceptional game development potential from schools and colleges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in animate-delay-300">
            <Link to="/application-portal">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:translate-y-[-2px]">
                Apply Now
              </button>
            </Link>
            <button onClick={handleLearnMore} className="bg-white text-gray-800 py-3 px-8 rounded-lg font-medium shadow-md border border-gray-100 hover:bg-gray-50 transition-all duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="relative mt-6 mx-auto max-w-5xl glass-panel rounded-2xl p-1 animate-scale-in animate-delay-400">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl overflow-hidden">
            <div className="p-8 md:p-12 text-white relative">
              <div className="absolute top-0 left-0 w-full h-full bg-blue-500/10 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-500/20 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                    <p className="text-gray-300">Programming proficiency, engine knowledge, and technical problem-solving abilities</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-500/20 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Creative Design</h3>
                    <p className="text-gray-300">Narrative skills, artistic vision, and innovative game mechanics development</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cyan-500/20 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
                    <p className="text-gray-300">Teamwork aptitude, critical thinking capabilities, and project management skills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;