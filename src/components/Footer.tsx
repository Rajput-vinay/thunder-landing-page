import React from 'react';
import { Zap, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                thunder.ai
              </span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-md">
              The AI-powered platform that transforms ideas into stunning, production-ready websites in seconds.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-purple-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-purple-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 dark:text-gray-400 hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 dark:text-gray-400 hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 dark:text-gray-400 hover:text-purple-400 transition-colors">Templates</a></li>
              <li><a href="#" className="text-gray-300 dark:text-gray-400 hover:text-purple-400 transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 dark:text-gray-400 hover:text-purple-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 dark:text-gray-400 hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 dark:text-gray-400 hover:text-purple-400 transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-300 dark:text-gray-400 hover:text-purple-400 transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 dark:border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          
          <a href='https://github.com/Rajput-vinay' className="text-gray-400 dark:text-gray-500 text-sm">
            © 2025 Rajput-vinay. All rights reserved.
          </a>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-purple-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-purple-400 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;