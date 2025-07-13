import React from 'react';
import { MessageSquare, Cpu, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Describe Your Vision",
      description: "Tell us what you want - from a simple landing page to a complex e-commerce site.",
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: Cpu,
      title: "AI Works Its Magic",
      description: "Our advanced AI analyzes your requirements and generates optimized code and design.",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Rocket,
      title: "Launch Your Site",
      description: "Review, customize, and deploy your website to the world in just a few clicks.",
      color: "from-green-600 to-green-700"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How Thunder.ai
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From concept to deployment in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className={`bg-gradient-to-r ${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-4 border-gray-200 dark:border-gray-600 flex items-center justify-center text-sm font-bold text-gray-600 dark:text-gray-300">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-4">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 dark:from-gray-600 to-transparent transform translate-x-8"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;