import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Vinay Rajput",
      role: "Full stack Developer & Team Lead",
      bio: " Full Stack MERN Developer and B.Tech CSE student passionate about building real-world web applications.Ex-Intern at Quantum IT Innovation and former Society Lead of AlgoZenith, I love turning ideas into impactful tech solutions.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHjqaHTHFBRlQ/profile-displayphoto-shrink_800_800/B56ZW0IeFQHoAk-/0/1742483876563?e=1758153600&v=beta&t=nV73ZrI_6FAYRzzmiEYR9Vls68aFkoVUYXEkjsoqEqM",
      social: {
        github: "https://github.com/Rajput-vinay",
        linkedin: "https://www.linkedin.com/in/vinay-rajput-984668227/",
        twitter: "#"
      }
    },
    {
      name: "Gaurav Kumar Yadav",
      role: "frontend Developer && UI/UX Designer",
      bio: "Passionate Frontend Developer skilled in React.js and Tailwind CSS, crafting responsive and user-friendly web interfaces.",
      image: "https://media.licdn.com/dms/image/v2/D5635AQGndTZOacS6HQ/profile-framedphoto-shrink_800_800/B56ZeyAi5tG0Ag-/0/1751038177222?e=1753030800&v=beta&t=c28McGf1Vy96G5GQHjAUpb9EwAA-aNMWCsB3wR3pVF4",
      social: {
        github: "#",
        linkedin: "https://www.linkedin.com/in/gaurav-kumar-yadav-30406a236/",
        twitter: "#"
      }
    },
    {
      name: "Vishal Dubey",
      role: "Frontend Developer && content Creator",
      bio: "Passionate Frontend Developer skilled in React.js and Tailwind CSS, crafting responsive and user-friendly web interfaces.",
      image: "https://avatars.githubusercontent.com/u/125554381?v=4",
      social: {
        github: "https://github.com/vishaldubey-00",
        linkedin: "#",
        twitter: "#"
      }
    },
   
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meet Our
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The brilliant minds behind Thunder.ai, working together to revolutionize web development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-600 hover:transform hover:scale-105"
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white dark:border-gray-700 shadow-lg group-hover:border-purple-200 dark:group-hover:border-purple-600 transition-all"
                  />
                  <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-r from-purple-600/20 to-blue-600/20 group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-all"></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">{member.bio}</p>
                
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.social.github} 
                    className="text-gray-400 dark:text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.social.linkedin} 
                    className="text-gray-400 dark:text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="text-gray-400 dark:text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-purple-100 dark:text-purple-200 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for AI and web development. 
              Help us shape the future of website creation.
            </p>
            <button className="bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-gray-700 transition-all flex items-center space-x-2 mx-auto">
              <Mail className="h-5 w-5" />
              <span>View Open Positions</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;