
import { Calendar, Award, ExternalLink, Eye, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ExperienceSection = () => {
  const handleViewCredential = (certName: string, certificateUrl?: string) => {
    if (certificateUrl) {
      window.open(certificateUrl, '_blank');
    } else {
      alert(`Certificate for ${certName} will be available soon!`);
    }
  };

  const certifications = [
    {
      organization: "CS50 x Harvard",
      period: "Dec 2024 – May 2025",
      courses: [
        {
          name: "CS50's Introduction to Computer Science",
          certificateUrl: "/lovable-uploads/5ae16e33-916f-4205-a011-934339b108ed.png"
        },
        {
          name: "Python Programming", 
          certificateUrl: "/lovable-uploads/fa22ca46-7178-4b08-8b51-debe2570169e.png"
        },
        {
          name: "Databases with SQL",
          certificateUrl: "/lovable-uploads/3b326cbe-d740-4ac2-b837-ad3adb224075.png"
        },
        {
          name: "Web Programming with Python and JavaScript",
          certificateUrl: null
        }
      ],
      type: "Educational Program",
      color: "from-red-600 to-red-700",
      hoverColor: "from-red-700 to-red-800",
      profileImage: "https://camo.githubusercontent.com/2485cdb92cc1563cb21703bd1dc5474a727cd17b4d8243b27b9906468ec4e945/68747470733a2f2f676f6f2e676c2f6d4a774e5543"
    },
    {
      organization: "TCS",
      program: "Young Professional Batch-2",
      period: "Feb 2025 – Apr 2025",
      courses: [],
      type: "Professional Development",
      color: "from-blue-600 to-blue-700",
      hoverColor: "from-blue-700 to-blue-800",
      singleCertificate: true,
      certificateUrl: "/lovable-uploads/78dd9d9e-835f-4dd2-af7b-4d8f37578e43.png"
    },
    {
      organization: "ServiceNow",
      program: "Micro-Certifications",
      period: "Feb 2025 – Apr 2025",
      courses: [
        {
          name: "Flow Designer – Feb 2025",
          certificateUrl: "/lovable-uploads/fc257750-c769-47cb-8525-d469c2efd264.png"
        },
        {
          name: "UI Builder – Apr 2025",
          certificateUrl: "/lovable-uploads/09c670e4-30a8-4121-8b5f-577e4b87c269.png"
        }
      ],
      type: "Technical Certification",
      color: "from-green-600 to-green-700",
      hoverColor: "from-green-700 to-green-800",
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9azji1P3eHGE-4K5f_uogVJk8glXpar_cg&s"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience & Certifications
          </h2>
          
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50 hover:via-white hover:to-purple-50 cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 rounded-lg bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                          {cert.profileImage ? (
                            <img 
                              src={cert.profileImage} 
                              alt={`${cert.organization} logo`}
                              className="w-full h-full object-contain p-1 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                          ) : (
                            <Award className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300 group-hover:scale-105 transform">{cert.organization}</h3>
                          {cert.program && <p className="text-gray-600 group-hover:text-gray-700 font-medium transition-colors duration-300">{cert.program}</p>}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <Calendar className="h-4 w-4 text-gray-500 group-hover:text-blue-500 transition-colors duration-300" />
                        <span className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{cert.period}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cert.color} group-hover:bg-gradient-to-r group-hover:${cert.hoverColor} text-white group-hover:scale-110 transition-all duration-300 group-hover:shadow-md`}>
                          {cert.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {cert.singleCertificate ? (
                    <div className="flex items-center justify-center p-4 bg-gray-50 group-hover:bg-blue-50 rounded-lg hover:bg-gray-100 transition-all duration-300">
                      <Button 
                        onClick={() => handleViewCredential(cert.program || cert.organization, cert.certificateUrl)}
                        variant="outline"
                        size="lg"
                        className="flex items-center space-x-2 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-xl group-hover:border-blue-400 group-hover:text-blue-700 group"
                      >
                        <Eye className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                        <span>View Credential</span>
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3 mb-4">
                      {cert.courses.map((course, courseIndex) => (
                        <div 
                          key={courseIndex} 
                          className="flex items-center justify-between p-4 bg-gray-50 group-hover:bg-blue-50 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-md cursor-pointer"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 group-hover:bg-blue-600 rounded-full group-hover:scale-150 transition-all duration-300"></div>
                            <span className="text-gray-700 group-hover:text-blue-700 font-medium transition-colors duration-300">{course.name}</span>
                          </div>
                          <Button 
                            onClick={() => handleViewCredential(course.name, course.certificateUrl)}
                            variant="outline"
                            size="sm"
                            className="flex items-center space-x-2 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg group-hover:border-blue-400 group-hover:text-blue-700 group"
                          >
                            <Eye className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                            <span>View</span>
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="group bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-100 hover:border-blue-300 hover:from-blue-100 hover:to-purple-100 transition-all duration-500 hover:shadow-lg cursor-pointer">
              <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-700 mb-4 transition-colors duration-300">Continuous Learning Journey</h3>
              <p className="text-gray-600 group-hover:text-gray-700 max-w-2xl mx-auto transition-colors duration-300">
                I believe in continuous learning and staying updated with the latest technologies and industry trends. 
                These certifications represent my commitment to professional growth and technical excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
