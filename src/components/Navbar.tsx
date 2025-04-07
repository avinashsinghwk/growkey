import { Menu, X, Instagram, Facebook, Twitter, Linkedin, Home, WrenchIcon, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 w-full z-50 h-16">
        <div className="flex justify-between h-16 px-4 sm:px-6">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-purple-600">Grow-Key</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-purple-600">Services</Link>
            <Link to="/team" className="text-gray-700 hover:text-purple-600">Team</Link>
            <div className="flex items-center space-x-4">
              <a href="https://www.instagram.com/growkey.co" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-purple-600 hover:text-purple-600" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 text-purple-600 hover:text-purple-600" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 text-purple-600 hover:text-purple-600" />
              </a>
              <a href="https://www.linkedin.com/in/manish-kumar-595666203" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-purple-600 hover:text-purple-600" />
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
      </div>

      {/* Mobile menu sidebar */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
      
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-purple-600">Grow-key</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-6">
            <Link 
              to="/" 
              className="flex gap-2 items-center text-gray-700 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
             <Home className="w-5 h-5 text-purple-600" /> Home
            </Link>
            <Link 
              to="/services" 
              className="flex gap-2 items-center text-gray-700 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
             <WrenchIcon className="w-5 h-5 text-purple-600" /> Services
            </Link>
            <Link 
              to="/team" 
              className="flex gap-2 items-center text-gray-700 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
             <Users className="w-5 h-5 text-purple-600" /> Team
            </Link>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">Follow us</p>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://www.instagram.com/growkey.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-purple-600"
                >
                  <Instagram className="w-5 h-5 text-purple-600" />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-purple-600"
                >
                  <Facebook className="w-5 h-5 text-purple-600" />
                  <span>Facebook</span>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-purple-600"
                >
                  <Twitter className="w-5 h-5 text-purple-600" />
                  <span>Twitter</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/manish-kumar-595666203" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-purple-600"
                >
                  <Linkedin className="w-5 h-5 text-purple-600" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}