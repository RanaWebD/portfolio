import React from 'react';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs,
  FaGitAlt, FaFigma, FaCode, FaDatabase, FaTools
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiFirebase, SiTailwindcss, SiExpress, SiPostman } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaCode className="w-6 h-6" />,
      skills: [
        'React.js',
        'JavaScript (ES6+)',
        'HTML5, CSS3',
        'Responsive Design'
      ]
    },
    {
      title: 'Backend & APIs',
      icon: <FaDatabase className="w-6 h-6" />,
      skills: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'RESTful APIs'
      ]
    },
    {
      title: 'Tools & Workflow',
      icon: <FaTools className="w-6 h-6" />,
      skills: [
        'Git & GitHub',
        'VS Code',
        'Postman',
        'Figma (Basic)'
      ]
    },
    {
      title: 'Currently Learning',
      icon: <FaCode className="w-6 h-6" />,
      skills: [
        'TypeScript',
        'Tailwind CSS',
        'Firebase',
        'GitHub Actions'
      ],
      isLearning: true
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            I've worked with a variety of technologies and tools to create amazing digital experiences. 
            Here are the skills I've developed over the years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card p-8">
              <div className="flex items-center mb-6">
                <div className="text-blue-600 mr-3">
                  {category.icon}
                </div>
                <h3 className={`text-2xl font-semibold ${
                  category.isLearning 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-gray-900 dark:text-white'
                }`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      category.isLearning 
                        ? 'bg-green-500' 
                        : 'bg-blue-500'
                    }`}></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <div className="card p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Additional Skills
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'RESTful APIs', 'Redux', 'Next.js', 
                'Express.js', 'CI/CD',
                'Responsive Design', 'Progressive Web Apps', 'SEO', 'Performance Optimization'
              ].map((skill, index) => (
                <div key={index} className="bg-gray-100 dark:bg-dark-700 rounded-md px-4 py-3 text-center">
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 