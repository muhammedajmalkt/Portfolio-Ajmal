import { InfiniteSlider } from "../motion-primitives/infinite-slider";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';


const skills = [
  { name: "HTML", level: 85 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 75 },
  { name: "TypeScript", level: 60 },
  { name: "React", level: 88 },
  { name: "Next.js", level: 80 },
  { name: "Node.js", level: 80 },
  { name: "Tailwind", level: 90 },
  { name: "Redux", level: 75 },
  { name: "Express", level: 80 },
  { name: "MongoDB", level: 82 },
  { name: "Git", level: 75 },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

const [hoveredSkill, setHoveredSkill] = useState(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    { threshold: 0.1 }
  );

  const element = document.getElementById("skill");
  if (element) observer.observe(element);

  return () => {
    if (element) observer.unobserve(element);
  };
}, []);

  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  return (
    <div className="min-h-screen text-white py-20 md:py-32" id="skill">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
                  ref={ref}

            className="flex flex-col items-start lg:items-end mb-16"
          >
            <div className="mb-8 sm:mb-12 lg:mb-16 text-start lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6">
                MY <br />
                <span className="text-gray-500">SKILLS</span>
              </h1>
              <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-md md:max-w-2xl mx-auto lg:mx-0">
                A comprehensive overview of my technical expertise and creative
                capabilities
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col items-end w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="w-full mb-12 lg:mb-16"
            >
                <div className="relative w-full flex justify-end ">
                <div className="lg:w-1/2 w-full ">

                  <div className=" absolute right-0 top-0 lg:w-28 w-8 h-full z-50 bg-gradient-to-l from-black via-black/80 to-transparent"></div>
                  <div className=" absolute  ml-auto top-0 lg:w-28 w-8 h-full z-50 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                
                  <InfiniteSlider gap={0.5} speed={40}>
                    <div className="px-2 sm:px-0">
                      <img
                        height={120}
                        width={10}
                        src="https://skillicons.dev/icons?i=html,css,js,ts,tailwind,react,next,nodejs,postman,redux,express,mongo,git,github,docker"
                        alt="skills"
                        className="h-16 sm:h-20 md:h-24 lg:h-26 w-auto inline "
                      />
                    </div>
                  </InfiniteSlider>
              <div className="border-t border-neutral-800 mt-8  sm:mt-12 lg:mt-14 h-6 sm:h-8 lg:h-10 z-30"></div>
                </div>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-6">
                Proficiency Levels
              </h2>
              {skills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="space-y-2 group"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base font-medium text-gray-300">
                      {skill.name}
                    </span>
                    <span className={`text-xs sm:text-sm text-gray-400 transition-opacity duration-300 ${
                      hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0'
                    }`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${skill.level}%` } : {}}
                      transition={{
                        duration: 1,
                        delay: 0.6 + index * 0.05,
                        ease: "easeOut",
                      }}
                      className="h-1.5 rounded-full bg-gradient-to-r from-indigo-800 to-indigo-300 absolute top-0 left-0"
                    />
                    {hoveredSkill === skill.name && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-8 right-0 px-2 bg-black py-1 rounded text-xs"
                      >
                        {skill.level}%
                      </motion.div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}