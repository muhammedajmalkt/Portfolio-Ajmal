import { Card, CardContent } from "../../Components/ui/card";
import { Home, Folder, Building2, Link, Dribbble, Twitter, Instagram, Mail, ArrowUpRight, Layers, Monitor, Download,   Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Profile_card from "./Profile_card";
import ShinyText from "../ui/shinyText";



export default function Profile() {

    const handleDownload = () => {
    const pdfUrl = "/MuhammedAjmal.pdf"; 
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Muhammed_Ajmal_CV.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="min-h-screen text-white" >
      {/* Navigation */}
      <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center items-center">
        <motion.div
          className="flex items-center space-x-8 py-4 px-7 rounded-3xl bg-black/60 shadow-indigo-950 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <a href="#profile"> <Home className="w-5 h-5 text-white/70 hover:text-indigo-600 cursor-pointer transition-colors animate-pulse " /> </a>
          <a href="#project"> <Folder className="w-5 h-5 text-white/70 hover:text-indigo-600 cursor-pointer transition-colors animate-pulse" /> </a>
          <a href="#skill"> <Building2 className="w-5 h-5 text-white/70 hover:text-indigo-600 cursor-pointer transition-colors animate-pulse" /> </a>
          <a href="#contact"> <Link className="w-5 h-5 text-white/70 hover:text-indigo-600 cursor-pointer transition-colors animate-pulse" /> </a>

        </motion.div>
      </nav>


      <div className="pt-24 flex flex-col lg:flex-row w-full justify-end" id="profile">
         <Profile_card/>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 min-h-screen p-4 lg:p-8 lg:pr-16">
          <div className="space-y-12 max-w-2xl">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                WEB
                <br />
                <span className="text-gray-500">DEVELOPER</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into
                beautifully crafted products.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div>
                <div className="text-4xl font-bold mb-2">+1</div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">
                  Years of
                  <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">+6</div>

                <div className="text-gray-500 text-sm uppercase tracking-wider">
                  Projects
                  <br />
                  Completed
                </div>
              </div>
            </motion.div>

            {/* Skill Cards */}
            <motion.div
              className="flex flex-col md:flex-row gap-6 mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white border-0 relative overflow-hidden flex-1">
                <CardContent className="p-6 relative z-10">
                  <Layers className="w-8 h-8 mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    DYNAMIC ANIMATION,
                    <br />
                    MOTION DESIGN
                  </h3>
                  <ArrowUpRight className="absolute bottom-4 right-4 w-6 h-6" />
                </CardContent>
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 200 120">
                    <defs>
                      <pattern id="orange-pattern" patternUnits="userSpaceOnUse" width="40" height="40">
                        <path d="M0 40L40 0M-10 10L10 -10M30 50L50 30" stroke="white" strokeWidth="2" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#orange-pattern)" />
                  </svg>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-lime-400 to-green-400 text-black border-0 relative overflow-hidden flex-1">
                <a href="#project">
                  <CardContent className="p-6 relative z-10">
                    <Monitor className="w-8 h-8 mb-4" />
                    <h3 className="text-xl font-bold mb-2">
                      FRAMER, FIGMA,
                      <br />
                      REACTJS,NEXTJS
                    </h3>
                    <ArrowUpRight className="absolute bottom-4 right-4 w-6 h-6" />
                  </CardContent>
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 200 120">
                      <defs>
                        <pattern id="green-pattern" patternUnits="userSpaceOnUse" width="30" height="30">
                          <circle cx="15" cy="15" r="2" fill="currentColor" />
                          <path d="M0 15L30 15M15 0L15 30" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#green-pattern)" />
                    </svg>
                  </div>
                </a>
              </Card>
            </motion.div>

            {/* About Me Section */}
            <motion.div
              className="pt-16 pb-32"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-500">About Me</h2>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  With over 1 year of experience in software engineering, I've had the privilege of working on diverse
                  projects that span across different industries and technologies.
                </p>
                <p>
                  My expertise lies in creating seamless user experiences through innovative design and robust
                  development practices. I specialize in modern web technologies and have a passion for transforming
                  complex ideas into elegant, user-friendly solutions.
                </p>
                <p>
                  Throughout my career, I've collaborated with teams worldwide, delivering high-quality products that
                  not only meet business objectives but also delight users with their intuitive interfaces and smooth
                  interactions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-50">
        <Button className="bg-indigo-900 hover:bg-indigo-700 text-white"         onClick={handleDownload} >
          <Download className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline"> <ShinyText text="Download CV" disabled={false} speed={2} className='custom-class' /> </span>
          <span className="sm:hidden"><ShinyText text="Download" disabled={false} speed={2} className='custom-class' /></span>
        </Button>
      </div>
    </div>
  );
}