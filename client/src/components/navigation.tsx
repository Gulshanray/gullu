import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

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
            <Link 
              href="/"
              className={`transition-colors duration-300 font-medium ${location === '/' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Home
            </Link>
            <Link 
              href="/services"
              className={`transition-colors duration-300 font-medium ${location === '/services' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Services
            </Link>
            <Link 
              href="/courses"
              className={`transition-colors duration-300 font-medium ${location === '/courses' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Courses
            </Link>
            <Link 
              href="/reviews"
              className={`transition-colors duration-300 font-medium ${location === '/reviews' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Reviews
            </Link>
            <Link 
              href="/contact"
              className={`transition-colors duration-300 font-medium ${location === '/contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Contact Us
            </Link>
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
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors duration-300 ${location === '/' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors duration-300 ${location === '/services' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Services
              </Link>
              <Link 
                href="/courses" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors duration-300 ${location === '/courses' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Courses
              </Link>
              <Link 
                href="/reviews" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors duration-300 ${location === '/reviews' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Reviews
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors duration-300 ${location === '/contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}