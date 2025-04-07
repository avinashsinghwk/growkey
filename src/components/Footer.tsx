import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-purple-400">Grow-Key</h3>
            <p className="text-gray-400">
              Empowering your social media presence with strategic management and expert consultancy.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/growkey.co" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/manish-kumar-595666203" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#hero" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-purple-400 transition-colors">Services</Link>
              </li>
              <li>
                <a href="/#case-studies" className="text-gray-400 hover:text-purple-400 transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Social Media Management</li>
              <li className="text-gray-400">Content Strategy</li>
              <li className="text-gray-400">Community Management</li>
              <li className="text-gray-400">Analytics & Reporting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-purple-400" />
                <a href="mailto:maanavnova@gmail.com" className="hover:text-purple-400 transition-colors">
                maanavnova@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5 text-purple-400" />
                <a href="tel:+919162100126" className="hover:text-purple-400 transition-colors">
                +91 91621 00126
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span>Patna, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>&copy; {currentYear} Grow-Key. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}