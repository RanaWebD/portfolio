import React from 'react';
import { FaGithub, FaLinkedin, FaArrowDown, FaDownload } from 'react-icons/fa';

const Home = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-max">
        <div className="text-center animate-fade-in">
          {/* Intro Text */}
          <div className="mb-8">
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
              Hi, my name is
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Himanshu Rana.
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-600 dark:text-gray-300 mb-8">
              React & TypeScript Developer Based in Australia.
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            I build modern, user-focused web applications with clean UI and scalable code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary">
              View My Work
            </button>
            <button className="btn-secondary">
              <FaDownload className="w-4 h-4" />
              Download Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/RanaWebD"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-md bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-200 group"
            >
              <FaGithub className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-md bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-200 group"
            >
              <FaLinkedin className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce-slow">
            <button
              onClick={scrollToAbout}
              className="p-2 rounded-md bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-200"
            >
              <FaArrowDown className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 