import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiTailwindcss, SiTypescript } from 'react-icons/si';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Dry Cleaner Boys Mobile App',
      description: 'Developed a cross-platform mobile app for Android and iOS using React Native and Node.js. Integrated MongoDB for backend data storage and Msg91 for real-time SMS notifications. Published the app on Google Play Store and Apple App Store.',
      image: 'https://github.com/RanaWebD/DryCleanerBoysReactNative/blob/master/client/assets/images/icon.png?raw=true',
      category: 'mobile',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Msg91', 'JavaScript'],
      github: 'https://github.com/RanaWebD/DryCleanerBoysReactNative',
      live: '#',
    },
    {
      id: 2,
      title: 'Dry Cleaner Boys Booking Website',
      description: 'Built a responsive booking website using HTML5, CSS3, Bootstrap, and JavaScript. Integrated Msg91 for SMS confirmations and customer engagement. Enabled online appointment scheduling, pricing views, and service listings.',
      image: 'https://github.com/RanaWebD/DryCleaner/blob/master/imgs/thumbnail/website.png?raw=true',
      category: 'frontend',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'DigitalOcean'],
      github: 'https://github.com/RanaWebD/DryCleaner',
      live: 'https://ranawebd.github.io/DryCleaner/',
    },
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Mobile', value: 'mobile' },
  ];

  const getTechnologyIcon = (tech) => {
    const iconMap = {
      'React': <FaReact className="w-4 h-4" />,
      'React Native': <FaReact className="w-4 h-4" />,
      'Node.js': <FaNodeJs className="w-4 h-4" />,
      'MongoDB': <SiMongodb className="w-4 h-4" />,
      'Firebase': <SiFirebase className="w-4 h-4" />,
      'Tailwind CSS': <SiTailwindcss className="w-4 h-4" />,
      'TypeScript': <SiTypescript className="w-4 h-4" />,
    };
    return iconMap[tech] || <FaDatabase className="w-4 h-4" />;
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Here are the projects I've worked on. Each one represents real client work 
            and learning opportunities.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                activeFilter === filter.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card group overflow-hidden card-hover">
              <div className="relative overflow-hidden bg-gray-100 dark:bg-dark-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {project.category === 'mobile' ? 'Mobile App' : 'Web App'}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-200"
                    >
                      {getTechnologyIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </a>
                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.live === '#' && (
                    <span className="flex items-center gap-2 text-gray-400 dark:text-gray-500 font-medium">
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 