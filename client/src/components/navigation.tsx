import { useState } from 'react';
import { Code, Menu, X } from 'lucide-react';

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
    <nav className="fixed top-0 w-full z-50 glass-morphism">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-tech-primary to-tech-accent rounded-xl flex items-center justify-center animate-glow">
              <Code className="text-white text-xl" />
            </div>
            <span className="text-2xl font-bold text-gradient">TechSol</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="hover:text-tech-accent transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="hover:text-tech-accent transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="hover:text-tech-accent transition-colors duration-300"
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="hover:text-tech-accent transition-colors duration-300"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-tech-accent transition-colors duration-300"
            >
              Contact
            </button>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left hover:text-tech-accent transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left hover:text-tech-accent transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('courses')}
                className="text-left hover:text-tech-accent transition-colors duration-300"
              >
                Courses
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="text-left hover:text-tech-accent transition-colors duration-300"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left hover:text-tech-accent transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
