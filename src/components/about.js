import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.section 
      className="bg-gray-100 py-12 lg:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between">
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img 
            src="./wisdom-dev.png" 
            alt="Developer" 
            className="w-full rounded-lg shadow-lg" 
          />
        </motion.div>
        <motion.div 
          className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hi, I'm REUBEN WISDOM IKEDICHI, a passionate Frontend web developer based in Abia State, Nigeria. With a strong background in Web development with | HTML | CSS | and JavaScript | I specialize in building modern and responsive web applications.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            I have experience working with frameworks like React.js,Next.js  and I'm always eager to learn new technologies to improve my skills and deliver high-quality solutions to clients.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Let's connect and discuss how we can collaborate to bring your project ideas to life!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;

