import React from 'react';
import { Zap, Code, Palette, Shield, Smartphone, Cloud } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Generation",
      description: "Create complete websites in under 30 seconds with our advanced AI algorithms."
    },
    {
      icon: Code,
      title: "Clean, Modern Code",
      description: "Production-ready HTML, CSS, and JavaScript that follows best practices."
    },
    {
      icon: Palette,
      title: "Beautiful Designs",
      description: "Stunning, responsive designs that adapt to any brand or industry."
    },
    {
      icon: Shield,
      title: "SEO Optimized",
      description: "Built-in SEO optimization to help your website rank higher in search results."
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Every website is designed to look perfect on all devices and screen sizes."
    },
    {
      icon: Cloud,
      title: "Instant Deployment",
      description: "Deploy your website instantly to our global CDN or export for self-hosting."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}Modern Web
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to build professional websites without the complexity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50 dark:hover:from-purple-900/20 dark:hover:to-blue-900/20"
              >
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;