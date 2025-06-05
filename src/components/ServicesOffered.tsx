import React from 'react';
import { FiCode, FiSmartphone, FiMonitor, FiLayers, FiDatabase, FiServer } from 'react-icons/fi';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Custom, responsive websites built with modern technologies like React, Next.js, and TypeScript.',
    icon: <FiCode className="w-8 h-8 text-primary-500" />
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    description: 'Cross-platform mobile apps for iOS and Android using React Native or Flutter.',
    icon: <FiSmartphone className="w-8 h-8 text-primary-500" />
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that enhance user experience and drive engagement.',
    icon: <FiMonitor className="w-8 h-8 text-primary-500" />
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Solutions',
    description: 'End-to-end development with frontend, backend, and database integration.',
    icon: <FiLayers className="w-8 h-8 text-primary-500" />
  },
  {
    id: 'database',
    title: 'Database Design',
    description: 'Efficient and scalable database architecture for your application needs.',
    icon: <FiDatabase className="w-8 h-8 text-primary-500" />
  },
  {
    id: 'devops',
    title: 'DevOps & Deployment',
    description: 'CI/CD pipelines, containerization, and cloud deployment solutions.',
    icon: <FiServer className="w-8 h-8 text-primary-500" />
  }
];

const ServicesOffered: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOffered;