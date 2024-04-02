import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <p>&copy; 2024 Your Company</p>
        </div>
        <div className="flex">
          <nav className="mr-8">
            <ul className="flex">
              <li className="mr-4"><a href="/">About</a></li>
              <li className="mr-4"><a href="/">Portfolio</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </nav>
          <div className="flex">
            <a href="https://www.linkedin.com/in/reuben-wisdom-02ab21236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white mr-4">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com/Rublyn11" className="text-white mr-4">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://twitter.com/Rublyn111" className="text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

