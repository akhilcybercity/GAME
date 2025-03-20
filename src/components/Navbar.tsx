import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils'; // Ensures available or implement it
import { useNavigate } from 'react-router-dom'; // Import useNavig this utility function iate for routing

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false); // Type the state as boolean
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Change background when scrolled
    };

    window.addEventListener('scroll', handleScroll); // Attach the scroll event
    return () => window.removeEventListener('scroll', handleScroll); // Clean up the event listener
  }, []);

  const handleGetStartedClick = () => {
    // Redirect to the ApplicationPortal route when "Get Started" is clicked
    navigate('/application-portal');
  };

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out px-6 py-4',
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100/30'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <span
            className={cn(
              'font-medium text-xl tracking-tight',
              scrolled ? 'text-gray-900' : 'text-gray-800'
            )}
          >
            GameTalent
          </span>
        </div>

        <div className="hidden md:flex space-x-8">
          {['Framework', 'Evaluation', 'Roadmap', 'Mentorship', 'Apply'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                'font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full',
                scrolled ? 'text-gray-900' : 'text-gray-800'
              )}
            >
              {item}
            </a>
          ))}
        </div>

        <button
          onClick={handleGetStartedClick} // Add the click handler here
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:translate-y-[-1px]"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
