
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Deep Detect",
      description: "Real-time threat detection and defense system using advanced cybersecurity techniques and machine learning algorithms.",
      skills: ["Cybersecurity", "Machine Learning", "Python", "Threat Detection"],
      github: "https://github.com/Hemanth-Kumar-Somana/Deep_Detect/",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop",
      gradient: "from-red-500 to-pink-500",
      hoverGradient: "from-red-600 to-pink-600"
    },
    {
      title: "Password Manager",
      description: "Secure Vault for Your Credentials with advanced encryption and user-friendly interface for managing passwords safely.",
      skills: ["MERN Stack", "Security", "Encryption"],
      github: "https://github.com/Hemanth-Kumar-Somana/Password-Manager",
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=500&h=300&fit=crop",
      gradient: "from-blue-500 to-cyan-500",
      hoverGradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "DSA Learning Portal",
      description: "DSA Made Simple and Effective - A comprehensive platform for learning Data Structures and Algorithms with interactive content.",
      skills: ["React", "Node.js", "Educational Technology"],
      github: "https://github.com/Hemanth-Kumar-Somana/DSA-learning-portal",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      gradient: "from-green-500 to-emerald-500",
      hoverGradient: "from-green-600 to-emerald-600"
    },
    {
      title: "Daily Email Summarizer",
      description: "Intelligent email processing system that automatically summarizes daily emails using natural language processing and machine learning techniques.",
      skills: ["Machine Learning", "Python", "Email Processing"],
      github: "https://github.com/Hemanth-Kumar-Somana/Daily-Email-Summarizer",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&h=300&fit=crop",
      gradient: "from-purple-500 to-violet-500",
      hoverGradient: "from-purple-600 to-violet-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-200 hover:border-blue-400 transform hover:-translate-y-4 hover:scale-[1.02] hover:bg-gradient-to-br hover:from-blue-50 hover:via-white hover:to-purple-50 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} group-hover:bg-gradient-to-r group-hover:${project.hoverGradient} opacity-20 group-hover:opacity-40 transition-all duration-500`}></div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-4 sm:p-6 border-t-2 border-gray-100 group-hover:border-blue-200">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-700 transition-all duration-300 group-hover:scale-105 transform">{project.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 mb-4 leading-relaxed text-sm sm:text-base transition-colors duration-300">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-purple-200 group-hover:text-blue-900 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 cursor-default transform hover:rotate-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="flex items-center space-x-2 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 transform hover:scale-110 hover:shadow-xl group-hover:border-blue-400 group-hover:text-blue-700 text-xs sm:text-sm"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:rotate-12" />
                        <span>GitHub</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="group bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 sm:p-8 border-2 border-blue-100 hover:border-blue-300 hover:from-blue-100 hover:to-purple-100 transition-all duration-500 hover:shadow-lg cursor-pointer">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-700 mb-4 transition-colors duration-300">Want to see more?</h3>
              <p className="text-gray-600 group-hover:text-gray-700 mb-6 text-sm sm:text-base transition-colors duration-300">Check out my GitHub profile for additional projects and contributions.</p>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-110 hover:shadow-xl transition-all duration-300">
                <a href="https://github.com/Hemanth-Kumar-Somana/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <Github className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="text-sm sm:text-base">Visit GitHub Profile</span>
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
