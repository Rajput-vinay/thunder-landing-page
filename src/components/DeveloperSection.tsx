import React from 'react';
import { Terminal, Code2, Wrench, Book, Github, ExternalLink } from 'lucide-react';

const DeveloperSection = () => {
  const developerFeatures = [
    {
      icon: Terminal,
      title: "API Integration",
      description: "Powerful REST API to integrate Thunder.ai into your existing workflows and applications."
    },
    {
      icon: Code2,
      title: "Custom Templates",
      description: "Create and share custom templates with your team or the community."
    },
    {
      icon: Wrench,
      title: "Developer Tools",
      description: "Advanced debugging, version control, and deployment tools built for developers."
    }
  ];

  const resources = [
    { title: "API Documentation", icon: Book, link: "#" },
    { title: "GitHub Repository", icon: Github, link: "#" },
    { title: "Developer Portal", icon: ExternalLink, link: "#" }
  ];

  return (
    <section id="developers" className="py-20 bg-gray-900 dark:bg-gray-950 text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {" "}Developers
            </span>
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto">
            Integrate Thunder.ai into your development workflow with our comprehensive tools and APIs
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-semibold mb-6">Extend and Customize</h3>
            <p className="text-lg text-gray-300 dark:text-gray-400 mb-8 leading-relaxed">
              Thunder.ai provides extensive customization options for developers who want to integrate 
              AI-powered website generation into their own platforms and workflows.
            </p>
            
            <div className="space-y-6">
              {developerFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg flex-shrink-0">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                      <p className="text-gray-300 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="bg-gray-800 dark:bg-gray-900 rounded-2xl p-8 border border-gray-700 dark:border-gray-600">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-400 dark:text-gray-500 ml-2">Terminal</span>
            </div>
            <div className="font-mono text-sm">
              <div className="text-green-400">$ thunder-ai create --template=modern</div>
              <div className="text-gray-400 dark:text-gray-500 mt-2">✓ Analyzing requirements...</div>
              <div className="text-gray-400 dark:text-gray-500">✓ Generating components...</div>
              <div className="text-gray-400 dark:text-gray-500">✓ Optimizing performance...</div>
              <div className="text-blue-400 mt-2">🚀 Website generated successfully!</div>
              <div className="text-purple-400">📦 Deploy: thunder-ai deploy --prod</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 dark:border-gray-600 pt-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Developer Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <a
                  key={index}
                  href={resource.link}
                  className="group bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 rounded-xl p-6 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="h-6 w-6 text-purple-400 dark:text-purple-300 group-hover:text-purple-300 dark:group-hover:text-purple-200" />
                    <span className="font-semibold group-hover:text-purple-300 dark:group-hover:text-purple-200">{resource.title}</span>
                    <ExternalLink className="h-4 w-4 text-gray-400 dark:text-gray-500 group-hover:text-purple-300 dark:group-hover:text-purple-200 ml-auto" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;