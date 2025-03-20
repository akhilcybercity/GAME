import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const ApplicationPortal = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    institution: '',
    educationLevel: '',
    interest: '',
    portfolio: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:emailstoakhilkumarkm@gmail.com?subject=Application Submission&body=
      First Name: ${formData.firstName}%0D%0A
      Last Name: ${formData.lastName}%0D%0A
      Email: ${formData.email}%0D%0A
      Educational Institution: ${formData.institution}%0D%0A
      Education Level: ${formData.educationLevel}%0D%0A
      Area of Interest: ${formData.interest}%0D%0A
      Portfolio/GitHub: ${formData.portfolio}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="apply" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4 animate-fade-in">
            Application Portal
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-in animate-delay-100">
            Ready to <span className="text-gradient">Join the Program?</span>
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in animate-delay-200">
            Apply now to be considered for our game development talent identification and mentorship program.
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-8 max-w-4xl mx-auto animate-slide-up animate-delay-300">
          <h3 className="text-2xl font-semibold mb-6">Start Your Application</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg" required />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg" required />
            </div>
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg" required />
            <input type="text" name="institution" placeholder="Educational Institution" value={formData.institution} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg" required />
            <select name="educationLevel" value={formData.educationLevel} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg" required>
              <option value="">Select Education Level</option>
              <option value="high_school">High School</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate</option>
              <option value="other">Other</option>
            </select>
            <select name="interest" value={formData.interest} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg" required>
              <option value="">Select Area of Interest</option>
              <option value="programming">Game Programming</option>
              <option value="design">Game Design</option>
              <option value="art">Game Art & Animation</option>
              <option value="narrative">Narrative & Writing</option>
              <option value="audio">Audio Design</option>
              <option value="other">Other</option>
            </select>
            <input type="text" name="portfolio" placeholder="Portfolio/GitHub Link" value={formData.portfolio} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg" required />
            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:translate-y-[-2px]">
              Submit Application
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">
              By submitting, you agree to our Terms and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationPortal;
