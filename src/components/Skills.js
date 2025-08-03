import React from 'react';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs,
  FaPython, FaGitAlt, FaFigma, FaSass
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiFirebase, SiTailwindcss, SiVite } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: <FaReact className="w-6 h-6" />, level: 80 },
        { name: 'JavaScript', icon: <FaJs className="w-6 h-6" />, level: 75 },
        { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6" />, level: 65 },
        { name: 'HTML5', icon: <FaHtml5 className="w-6 h-6" />, level: 90 },
        { name: 'CSS3', icon: <FaCss3Alt className="w-6 h-6" />, level: 85 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-6 h-6" />, level: 70 },
        { name: 'Sass', icon: <FaSass className="w-6 h-6" />, level: 60 },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="w-6 h-6" />, level: 60 },
        { name: 'Python', icon: <FaPython className="w-6 h-6" />, level: 50 },
        { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6" />, level: 60 },
        { name: 'PostgreSQL', icon: <SiPostgresql className="w-6 h-6" />, level: 40 },
        { name: 'Firebase', icon: <SiFirebase className="w-6 h-6" />, level: 45 },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="w-6 h-6" />, level: 80 },
        { name: 'Vite', icon: <SiVite className="w-6 h-6" />, level: 70 },
        { name: 'Figma', icon: <FaFigma className="w-6 h-6" />, level: 60 },
      ]
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

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="card p-6 card-hover">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-blue-600 group-hover:scale-110 transition-transform duration-200">
                          {skill.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </h4>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2 mb-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          Proficiency
                        </span>
                        <span className="text-sm font-medium text-blue-600">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
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