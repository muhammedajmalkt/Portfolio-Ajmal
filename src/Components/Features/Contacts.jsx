import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Mail, Phone, Send, Github, Linkedin, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tell: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // await emailjs.send( 'service_ulez4d3', 'template_qegvq6p', formData, 'eUm1v8nnV1kEY8MJf' );
      await emailjs.send( 'service_umpm8fk', 'template_qegvq6p', formData, 'eUm1v8nnV1kEY8MJf' );
      
     toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        tell: ''
      });
    } catch (error) {
      console.error(error);
     toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-4 lg:px-8" id="contact">
      <div className="w-full flex flex-col items-start lg:items-end mx-auto">
        {/* Header */}
        <div className="w-full lg:w-1/2 mx-0 lg:mx-10 lg:pl-14">
          <div className="mb-8 lg:mb-16 text-start lg:text-start text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6">
              GET IN
              <br />
              <span className="text-gray-500">TOUCH</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
              Ready to bring your ideas to life? Let's discuss your next project
              and create something amazing together.
            </p>
          </div>

          <div className="w-full lg:w-10/12 mb-8 lg:mb-16">
            {/* Contact Form */}
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 lg:mb-6 text-white">
                  Send me a message
                </h2>
                <form onSubmit={sendEmail} className="space-y-4 lg:space-y-6">
                  <div>
                    <label htmlFor="name" className="text-gray-300 text-sm sm:text-base">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white mt-1 sm:mt-2 text-sm sm:text-base"
                      placeholder="John"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-gray-300 text-sm sm:text-base">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white mt-1 sm:mt-2 text-sm sm:text-base"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-gray-300 text-sm sm:text-base">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="tell"
                      value={formData.tell}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white mt-1 sm:mt-2 min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-orange-600 hover:bg-orange-500 text-white text-sm sm:text-base"
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            <div className='flex justify-center lg:justify-start'>
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm sm:text-base"> Email </h3>
                    <a href="mailto:muhammedajmalkt09@gmail.com"
                      className="text-gray-400 text-xs sm:text-sm hover:text-indigo-500 transition-colors"
                    >
                      muhammedajmalkt09@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className='  flex justify-center lg:justify-start'>
              <div className="flex space-x-3 sm:space-x-4 ">
                <a href="https://github.com/muhammedajmalkt" target='_blank'
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-indigo-600  "  />
                </a>
                <a href="https://www.linkedin.com/in/muhammed-ajmalkt/" target='_blank'
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center  transition-colors"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-indigo-600 " />
                </a>
                <a href="https://wa.me/+917025316881" target='_blank'
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center  transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-indigo-600 " />
                </a>
                <a href="https://www.instagram.com/_ajmal__kt" target='_blank'
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center  transition-colors"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-indigo-600 " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-500 text-center py-4 w-ful my-10">
        © 2025 Muhammed Ajmal. All rights reserved.
      </div>
    </div>
  );
}