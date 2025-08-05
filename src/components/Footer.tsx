import React from 'react';
import { Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">X</span>
              </div>
              <span className="text-xl font-bold text-gray-900">XGODO</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Remote device testing platform for developers and QA teams.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Device Hub</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Testing APIs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Automation Tools</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Status</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <ul className="space-y-2 mb-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Careers</a></li>
            </ul>
            
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 text-sm text-gray-600 mb-4 md:mb-0">
              <a href="#" className="hover:text-gray-900">Terms of Service</a>
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <span>© 2025 XGODO. All Rights Reserved.</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Follow us:</span>
              <a href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">YouTube</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">X.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;