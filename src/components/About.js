import React from 'react';
import { FaGraduationCap, FaBriefcase, FaUser, FaCode } from 'react-icons/fa';

const About = () => {
  const stats = [
    { label: 'Year Experience', value: '1' },
    { label: 'Projects Completed', value: '2' },
    { label: 'Happy Client', value: '1' },
    { label: 'Technologies', value: '10+' },
  ];

  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'JobSearch.works',
      period: '2025 – Present',
      description: 'Collaborating on real-world web projects using React and TypeScript. Contributing to UI improvements, bug fixes, and learning team workflows within a professional development environment.',
      icon: <FaCode className="w-5 h-5" />,
    },
    {
      title: 'Career Break – Self-Learning & Projects',
      company: 'Independent Learning',
      period: 'Jan 2019 – Jun 2025',
      description: 'Focused on upskilling during relocation to Australia. Completed self-paced courses (freeCodeCamp, Scrimba), built MERN stack projects, practiced Git, responsive design, and improved English communication skills.',
      icon: <FaUser className="w-5 h-5" />,
    },
    {
      title: 'React Native Developer (Freelancer)',
      company: 'Dry Cleaner Boys Pvt. Ltd.',
      period: 'Mar 2018 – Jun 2018',
      description: 'Built and deployed a cross-platform mobile app using React Native, Node.js, and MongoDB. Integrated Msg91 for real-time SMS alerts and enhanced the customer booking flow.',
      icon: <FaBriefcase className="w-5 h-5" />,
    },
    {
      title: 'Front-End Developer (Freelancer)',
      company: 'Freelance',
      period: 'Jan 2018 – Mar 2018',
      description: 'Created a responsive web booking platform using HTML5, CSS3, JavaScript, and Bootstrap. Integrated SMS confirmations and deployed the site on DigitalOcean.',
      icon: <FaBriefcase className="w-5 h-5" />,
    },
    {
      title: 'Software Engineer Intern',
      company: 'Durlabh Computers Pvt. Ltd.',
      period: 'Feb 2017 – Apr 2017',
      description: 'Supported frontend and backend tasks using React, Node.js, and SQL. Participated in debugging, development, and documentation in an Agile environment.',
      icon: <FaBriefcase className="w-5 h-5" />,
    },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            Web developer in progress, focused on React and TypeScript. Currently interning at JobSearch.works and building clean, user-friendly websites.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="card p-6 text-center card-hover">
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="space-y-8">
            <div className="card p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                My Story
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I'm Himanshu Rana, a self-motivated web developer based in Australia. After completing my BCA and a diploma in hardware and networking, I took a long break from the tech industry. But my passion for technology never faded.
                </p>
                <p>
                  In 2025, I decided to fully restart my career — learning modern web development from scratch, practicing daily, and working on real projects. I'm currently interning at JobSearch.works, where I'm gaining hands-on experience with React, TypeScript, and real-world team workflows.
                </p>
                <p>
                  My goal is to become a junior developer and keep growing by building clean, human-centered digital products. Outside of coding, I love capturing life in Australia and sharing it through creative content.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <FaGraduationCap className="w-5 h-5 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Bachelor of Computer Applications (BCA)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Vinayaka Missions University, India
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Graduated: 2015
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Diploma in Hardware and Networking
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Jetking Institute of Learning, India
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Completed: 2016
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Work Experience
            </h3>
            {experiences.map((exp, index) => (
              <div key={index} className="card p-6 card-hover">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-md flex items-center justify-center text-blue-600">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {exp.title}
                    </h4>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 