import React from 'react';
import { ArrowRight, Sparkles, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Website Generation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            The AI that builds
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}websites
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into stunning, production-ready websites in seconds. 
            Thunder.ai is the revolutionary platform where AI meets web development.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all flex items-center space-x-2" onClick={() => window.location.href = "https://thunder-ai-sigma.vercel.app"}>
              <span>Start Building</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-purple-600 hover:text-purple-600 dark:hover:text-purple-400 transition-all">
              Watch Demo
            </button>
          </div>
          
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-16 w-16 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                  <p className="text-purple-700 dark:text-purple-300 font-semibold">Your Website Preview</p>
                  <p className="text-purple-600 dark:text-purple-400 text-sm">Generated in real-time</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium rotate-12">
              ⚡ Lightning Fast
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-medium -rotate-12">
              🚀 Production Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;