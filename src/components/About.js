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
        {/* Photo at top */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <img 
              src="/profile-photo.JPG" 
              alt="Himanshu Rana"
              className="w-64 h-64 rounded-full object-cover shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-blue-600 rounded-full opacity-20"></div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            React and TypeScript developer passionate about building interactive and accessible web applications.
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
                  I'm a React and TypeScript developer passionate about building interactive and accessible web applications.
                </p>
                <p>
                  Currently, I'm working as a Web Development Intern at <strong>JobSearch.works</strong>, where I collaborate on real-world projects, improve UI components, and follow professional workflows using Git and Agile practices.
                </p>
                <p>
                  Before this, I took time to relocate to Australia and focus deeply on self-learning. I built full-stack projects using React, Node.js, and MongoDB, completed hands-on courses (like freeCodeCamp and Scrimba), and improved my frontend fundamentals and English communication skills.
                </p>
                <p>
                  I hold a Bachelor of Computer Applications degree and I'm now actively looking for junior developer opportunities where I can grow, contribute to a team, and continue learning every day.
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