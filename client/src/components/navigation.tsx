import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">TechSol</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Mentors
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Testimonial
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Join
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Contact Us
            </button>
          </div>
          

          
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Courses
              </button>
              <button 
                onClick={() => scrollToSection('courses')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Mentors
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Testimonial
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Join
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}