import React from 'react'
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { Card, CardContent } from '../ui/card';


const Profile_card = () => {
  return (
        <div className="w-full lg:w-1/2 lg:h-screen lg:fixed lg:top-0 lg:left-0 flex items-center justify-center p-4 lg:p-8 ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white text-black w-full max-w-sm relative overflow-hidden px-5">
              <CardContent className="p-0">
                <div className="relative h-80">
                  <div className="absolute bg-black w-full rounded-2xl ">
                    <motion.img
                      src="/pic.jpeg"
                      alt="Muhammed Ajmal"
                      className="object-cover rounded-2xl"
                      style={{ width: "400px", height: "320px" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    />
                  </div>
                  <div className="absolute top-4 right-4 w-16 h-16">
                    <svg className="w-full h-full" viewBox="0 0 64 64">
                      <path
                        d="M8 8 L56 56"
                        stroke="orange"
                        strokeWidth="2"
                        strokeDasharray="4,4"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>

                <div className="p-6">
                  <motion.h2
                    className="text-2xl font-bold mb-4 mx-auto w-fit"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    Muhammed Ajmal
                  </motion.h2>

                  <div className="flex justify-center mb-4">
                    <svg width="100" height="20" viewBox="0 0 100 20">
                      <path
                        d="M10 10 Q30 5 50 10 T90 10"
                        stroke="orange"
                        strokeWidth="2"
                        strokeDasharray="3,3"
                        fill="none"
                      />
                    </svg>
                  </div>

                  <motion.p
                    className="text-gray-600 text-center mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    A Web developer who has developed countless innovative solutions.
                  </motion.p>

                  <motion.div
                    className="flex justify-center space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <a href="https://www.linkedin.com/in/muhammed-ajmalkt/" target='_blank' > <Linkedin className="w-5 h-5 text-orange-500 cursor-pointer hover:text-orange-600 transition-colors" /> </a>
                    <a href="https://github.com/muhammedajmalkt" target='_blank' > <Github className="w-5 h-5 text-orange-500 cursor-pointer hover:text-orange-600 transition-colors" /> </a>
                    <a href="https://www.instagram.com/_ajmal__kt" target='_blank'> <Instagram className="w-5 h-5 text-orange-500 cursor-pointer hover:text-orange-600 transition-colors" /> </a>
                    <a href="mailto:muhammedajmalkt09@gmail.com" target="_blank"> <Mail className="w-5 h-5 text-orange-500 cursor-pointer hover:text-orange-600 transition-colors" /> </a>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>  )
}

export default Profile_card