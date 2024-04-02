import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  const textVariants = {
    initial: { opacity: 0, y: -50, scale: 0.8, rotate: -5 },
    animate: { opacity: 1, y: 0, scale: 1, rotate: 0 },
    exit: { opacity: 0, y: -50 }
  };

  return (
    <motion.div className="bg-gray-900" initial="initial" animate="animate" exit="exit" variants={textVariants}>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl" variants={textVariants}>
            <span className="block">Welcome to</span>
            <span className="block text-indigo-600">Reuben Wisdom's Portfolio</span>
          </motion.h1>
          <motion.p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" variants={textVariants}>
            Web Developer | Web Designer | Programmer | Tech Enthusiast
          </motion.p>
          <motion.div className="mt-5 sm:mt-8 sm:flex justify-center" variants={textVariants}>
            <div className="rounded-md shadow">
              <a href="https://wa.me/qr/PWZJFICBKJAXO1" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Get in Touch
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3 flex items-center">
              <motion.a href="https://www.linkedin.com/in/reuben-wisdom-02ab21236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-300 hover:text-gray-400 mx-2" variants={textVariants}>
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </motion.a>
              <motion.a href="https://github.com/Rublyn11" className="text-gray-300 hover:text-gray-400 mx-2" variants={textVariants}>
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </motion.a>
              <motion.a href="https://twitter.com/Rublyn111" className="text-gray-300 hover:text-gray-400 mx-2" variants={textVariants}>
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </motion.a>
              <motion.a href="https://www.instagram.com/rublyn11/" className="text-gray-300 hover:text-gray-400 mx-2" variants={textVariants}>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </motion.a>
              <motion.a href="https://wa.me/qr/PWZJFICBKJAXO1" className="text-gray-300 hover:text-gray-400 mx-2" variants={textVariants}>
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;


