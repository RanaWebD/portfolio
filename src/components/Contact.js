import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: 'Email',
      value: 'himanshu.rana2111@gmail.com',
      link: 'mailto:himanshu.rana2111@gmail.com',
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: 'Location',
      value: 'Brisbane, Australia',
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/RanaWebD',
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ranawebd/',
      icon: <FaLinkedin className="w-5 h-5" />,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle">
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out if you'd like to work together or just say hello!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-md flex items-center justify-center text-blue-600">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-400">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                  Follow Me
                </h3>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-md bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-200 group"
                    >
                      <div className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="space-y-8">
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Availability
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Available for:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Freelance Projects</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Response time:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Timezone:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">AEST (UTC+10)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 