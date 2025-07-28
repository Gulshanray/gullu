import { Code } from 'lucide-react';
import { SiX, SiLinkedin, SiGithub, SiInstagram } from 'react-icons/si';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-tech-dark to-tech-secondary py-16 border-t border-white/10 relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-32 h-32 bg-tech-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-tech-accent/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-6 md:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-r from-tech-primary to-tech-accent rounded-xl flex items-center justify-center animate-glow">
                <Code className="text-white text-xl" />
              </div>
              <span className="text-3xl font-black text-gradient">TechSol</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg max-w-md">
              Transforming businesses with revolutionary digital solutions. Experience the future of technology today.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-12 h-12 glass-morphism rounded-xl flex items-center justify-center hover:bg-tech-accent transition-all duration-300 hover:scale-110 neon-border"
                aria-label="X (Twitter)"
              >
                <SiX className="text-white text-lg" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 glass-morphism rounded-xl flex items-center justify-center hover:bg-tech-accent transition-all duration-300 hover:scale-110 neon-border"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="text-white text-lg" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 glass-morphism rounded-xl flex items-center justify-center hover:bg-tech-accent transition-all duration-300 hover:scale-110 neon-border"
                aria-label="GitHub"
              >
                <SiGithub className="text-white text-lg" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 glass-morphism rounded-xl flex items-center justify-center hover:bg-tech-accent transition-all duration-300 hover:scale-110 neon-border"
                aria-label="Instagram"
              >
                <SiInstagram className="text-white text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-tech-accent transition-colors duration-300 text-left"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('courses')}
                  className="hover:text-tech-accent transition-colors duration-300 text-left"
                >
                  Training Courses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('reviews')}
                  className="hover:text-tech-accent transition-colors duration-300 text-left"
                >
                  Client Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-tech-accent transition-colors duration-300 text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><span className="hover:text-tech-accent transition-colors cursor-pointer">Web Development</span></li>
              <li><span className="hover:text-tech-accent transition-colors cursor-pointer">Mobile Apps</span></li>
              <li><span className="hover:text-tech-accent transition-colors cursor-pointer">AI Solutions</span></li>
              <li><span className="hover:text-tech-accent transition-colors cursor-pointer">Cloud Computing</span></li>
              <li><span className="hover:text-tech-accent transition-colors cursor-pointer">Digital Marketing</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 TechSol. All rights reserved. Built with passion for innovation.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-tech-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-tech-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-tech-accent transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
