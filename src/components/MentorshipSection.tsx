import React, { useState } from "react";
import { cn } from "@/utils/cn";

const MentorshipSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", resume: null });

  const mentorEmail = "adwaithkm952@gmail.com"; // Change this to the actual mentor's email

  const mentorshipAreas = [
    { title: "Technical Development", description: "Programming skills enhancement, engine mastery, and technical problem-solving.", icon: "💻" },
    { title: "Game Design Excellence", description: "Level design, gameplay mechanics, player experience, and game balancing.", icon: "🎮" },
    { title: "Art & Visual Direction", description: "2D/3D asset creation, animation, visual aesthetics, and style consistency.", icon: "🎨" },
    { title: "Narrative & Storytelling", description: "Story development, character creation, narrative integration, and player agency.", icon: "📖" },
  ];

  const mentorshipPrograms = [
    {
      title: "One-on-One Mentoring",
      description: "Personalized guidance from industry professionals tailored to individual growth areas.",
      frequency: "Weekly sessions"
    },
    {
      title: "Technical Workshops",
      description: "Hands-on specialized training in programming, engine use, and technical implementation.",
      frequency: "Bi-weekly"
    },
    {
      title: "Creative Masterclasses",
      description: "Sessions focused on game design, art direction, and narrative development.",
      frequency: "Monthly"
    },
    {
      title: "Collaborative Projects",
      description: "Team-based development challenges to build portfolio-worthy games.",
      frequency: "Ongoing"
    },
    {
      title: "Industry Speaker Series",
      description: "Talks and Q&A sessions with established game development professionals.",
      frequency: "Monthly"
    },
    {
      title: "Career Development",
      description: "Guidance on portfolio building, interviewing, and industry networking.",
      frequency: "Quarterly"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData((prev) => ({ ...prev, resume: files[0] })); // Store file
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent("Mentorship Application");
    const body = encodeURIComponent(
      `Hello,\n\nI would like to apply as a mentor.\n\nName: ${formData.name}\nEmail: ${formData.email}\nResume: ${formData.resume ? formData.resume.name : "Not attached"}\n\nBest Regards`
    );

    window.location.href = `mailto:${mentorEmail}?subject=${subject}&body=${body}`;
    
    setShowForm(false);
  };

  return (
    <section id="mentorship" className="py-20 px-6 bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-700 text-white text-sm font-medium mb-4">
            Mentorship & Training
          </span>
          <h2 className="text-4xl font-bold tracking-tight mb-6 text-white">
            Nurturing <span className="text-blue-400">Future Game Developers</span>
          </h2>
          <p className="text-lg text-gray-300">
            Our mentorship program transforms raw talent into industry-ready professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mentorshipAreas.map((area, index) => (
            <div key={index} className="bg-gray-800 rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{area.title}</h3>
              <p className="text-gray-400">{area.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-center text-white mb-8">Mentorship Programs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentorshipPrograms.map((program, index) => (
            <div key={index} className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-semibold text-white mb-2">{program.title}</h4>
              <p className="text-gray-400 mb-2">{program.description}</p>
              <span className="text-sm bg-blue-700 text-white px-2 py-1 rounded">{program.frequency}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            onClick={() => setShowForm(true)}
          >
            Become a Mentor
          </button>
        </div>

        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-xl font-semibold text-white mb-4">Apply as a Mentor</h3>
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                  className="w-full p-2 border rounded mb-2 bg-gray-700 text-white"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                  className="w-full p-2 border rounded mb-2 bg-gray-700 text-white"
                />
                
                {/* Upload Button for Resume */}
                <label className="block text-gray-400 text-sm mb-2">Upload Resume (PDF, DOCX):</label>
                <input 
                  type="file" 
                  name="resume" 
                  accept=".pdf,.doc,.docx" 
                  onChange={handleInputChange} 
                  className="w-full p-2 border rounded mb-4 bg-gray-700 text-white"
                />

                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  Submit Application
                </button>
                <button 
                  type="button" 
                  className="w-full mt-2 text-gray-300 py-2 rounded hover:text-gray-100 transition"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MentorshipSection;
