import { ArrowUpRight, Github, ExternalLink, Code, Link, ArrowDown, ArrowDownRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: "Qluster",
      disc: "Developer collaboration platform",
      image: "/qluster.png",
      description: "A platform for developers to collaborate on projects, share code, and manage tasks efficiently.",
      technologies: ["Next.js","Tailwind CSS","TypeScript", "Node.js","Express.js", "MongoDB","Docker"],
      links: {
        frontend: "https://github.com/muhammedajmalkt/qluster-client",
        backend: "https://github.com/muhammedajmalkt/qluster-server"
      }
    },
    {
      name: "SkillBridge",
      disc: "Peer to Peer skill swap platform",
      image: "/skill.png",
      description: "Platform where users can exchange skills with each other through real-time chat and video",
      technologies: ["React.js", "Tailwind CSS","Node.js","Express.js", "MongoDB"],
      links: {
        frontend: "https://github.com/muhammedajmalkt/SkillBridge",
        backend: "https://github.com/muhammedajmalkt/SkillBridge-Server"     
      }
    },   
      {
      name: "Student-Result Management",
      disc: "Student result Management system",
      image: "/school.png",
      description: "Comprehensive system for schools to manage and publish student results securely.",
      technologies: ["React.js", "Tailwind CSS", "Firebase"],
      links: {
        github: "https://github.com/school-result",
        frontend: "https://github.com/muhammedajmalkt/school-result-mgt",
        live: "https://result.ruihss.in/"

      }
    },
    {
      name: "PetFood",
      disc: "E-commerce for pet food",
      image: "/petFood.png",
      description: "Online store specializing in organic and premium pet food products.",
      technologies: ["React.js", "Tailwind CSS", "Node.js","Express.js", "MongoDB" ,"Razorpaye"],
      links: {
        frontend: "https://github.com/muhammedajmalkt/petFood",
        backend: "https://github.com/muhammedajmalkt/petFood-sever",
        live: "https://petfood-jzut.onrender.com/"
      }
    }

  ];

  return (
    <div className="min-h-screen text-white" id="project">
      <div className="lg:pt-24 px-4 lg:px-8">
        <div className="flex lg:justify-end justify-start">
          <div className="lg:max-w-1/2 w-full px-2 lg:px-10">
            <div className="space-y-12">
              <div className="mb-16">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                  RECENT
                  <br />
                  <span className="text-gray-500">PROJECTS</span>
                </h1>
              </div>
              
              <div className="space-y-9 bg-ajmber-300 ">
                {projects.map((item, index) => (
                  <div 
                    key={index}
                    className="relative group cursor-pointer p-4 rounded-lg hover:bg-gray-900/50 transition-colors"
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="w-full lg:w-38 lg:h-28 h-48 rounded-lg overflow-hidden">
                        <img 
                          src={item.image || "/project-placeholder.png"}
                          alt={item.name}
                          className="w-full h-full object-cover bg-gray-700"
                        />
                      </div>
                      <div className="flex-1 ">
                        <h3 className="text-xl md:text-2xl font-bold mb-1">{item.name}</h3>
                        <p className="text-gray-400">{item.disc}</p>
                      </div>
                   <div className="hidden lg:inline">
                     { hoveredProject === index ?  <ArrowDownRight className="w-6 h-6 text-gray-400 group-hover:text-indigo-600 transition-colors duration-75" />:
                        <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />}
                   </div>
                    </div>

                    <AnimatePresence>
                      {hoveredProject === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-gray-800">
                            <p className="text-gray-300 mb-4">{item.description}</p>
                            
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-gray-400 mb-2">TECHNOLOGIES</h4>
                              <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech, i) => (
                                  <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                              {item.links.frontend && (
                                <a 
                                  href={item.links.frontend} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="flex items-center text-orange-500 hover:text-orange-400"
                                >
                                  <Code className="w-4 h-4 mr-2" />
                                  <span>Frontend code</span>
                                </a>
                              )}

                              {item.links.backend && (
                                <a 
                                  href={item.links.backend} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="flex items-center text-orange-500 hover:text-orange-400"
                                >
                                  <Code className="w-4 h-4 mr-2" />
                                  <span>Backend Code</span>
                                </a>
                              )}
                              {item.links.live && (
                                <a 
                                  href={item.links.live} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="flex items-center text-orange-500 hover:text-orange-400"
                                >
                                  <Link className="w-4 h-4 mr-2" />
                                  <span>Live</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}