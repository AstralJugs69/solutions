import React, { useEffect, useRef } from 'react';
import { FiCode, FiSmartphone, FiMonitor, FiLayers, FiDatabase, FiServer } from 'react-icons/fi';
import { motion } from 'framer-motion';
// Import anime.js with TypeScript ignore
// @ts-ignore
import anime from 'animejs';
import type { TargetAndTransition } from 'framer-motion';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  textColor: string;
  animationType: 'pulse' | 'rotate' | 'bounce' | 'morph' | 'sparkle' | 'wave';
}

const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Custom, responsive websites built with modern technologies like React, Next.js, and TypeScript.',
    icon: <FiCode className="w-8 h-8" />,
    color: 'from-blue-600 to-cyan-500',
    textColor: 'group-hover:text-blue-500',
    animationType: 'pulse'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    description: 'Cross-platform mobile apps for iOS and Android using React Native or Flutter.',
    icon: <FiSmartphone className="w-8 h-8" />,
    color: 'from-purple-600 to-pink-500',
    textColor: 'group-hover:text-purple-500',
    animationType: 'bounce'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that enhance user experience and drive engagement.',
    icon: <FiMonitor className="w-8 h-8" />,
    color: 'from-amber-600 to-orange-500',
    textColor: 'group-hover:text-amber-500',
    animationType: 'rotate'
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Solutions',
    description: 'End-to-end development with frontend, backend, and database integration.',
    icon: <FiLayers className="w-8 h-8" />,
    color: 'from-emerald-600 to-green-500',
    textColor: 'group-hover:text-emerald-500',
    animationType: 'morph'
  },
  {
    id: 'database',
    title: 'Database Design',
    description: 'Efficient and scalable database architecture for your application needs.',
    icon: <FiDatabase className="w-8 h-8" />,
    color: 'from-rose-600 to-red-500',
    textColor: 'group-hover:text-rose-500',
    animationType: 'sparkle'
  },
  {
    id: 'devops',
    title: 'DevOps & Deployment',
    description: 'CI/CD pipelines, containerization, and cloud deployment solutions.',
    icon: <FiServer className="w-8 h-8" />,
    color: 'from-indigo-600 to-violet-500',
    textColor: 'group-hover:text-indigo-500',
    animationType: 'wave'
  }
];

const ServicesOffered: React.FC = () => {
  // Animation container refs
  const iconRefs = useRef<Array<HTMLDivElement | null>>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleGlowRef = useRef<HTMLDivElement>(null);

  // Animation variants for containers
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  // Initialize anime.js animations
  useEffect(() => {
    // Title glow animation
    if (titleGlowRef.current) {
      anime({
        targets: titleGlowRef.current,
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5],
        easing: 'easeInOutSine',
        duration: 4000,
        loop: true
      });
    }
    
    // Create animations for each icon based on type
    iconRefs.current.forEach((iconRef, index) => {
      if (!iconRef) return;
      
      const service = services[index];
      const animations = getAnimeConfig(service.animationType, iconRef);
      
      anime({
        targets: iconRef,
        ...animations,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
      });
    });
  }, []);
  
  // Get anime.js configuration based on animation type
  const getAnimeConfig = (type: Service['animationType'], target: HTMLElement) => {
    // Common settings
    const duration = 2500;
    
    // Get shadow color based on target's background gradient class
    const getColor = () => {
      if (target.classList.contains('from-blue-600')) return 'rgba(59, 130, 246, 0.7)';
      if (target.classList.contains('from-purple-600')) return 'rgba(168, 85, 247, 0.7)';
      if (target.classList.contains('from-amber-600')) return 'rgba(245, 158, 11, 0.7)';
      if (target.classList.contains('from-emerald-600')) return 'rgba(16, 185, 129, 0.7)';
      if (target.classList.contains('from-rose-600')) return 'rgba(244, 63, 94, 0.7)';
      if (target.classList.contains('from-indigo-600')) return 'rgba(79, 70, 229, 0.7)';
      return 'rgba(59, 130, 246, 0.7)'; // Default
    };
    
    switch(type) {
      case 'pulse':
        return {
          scale: [1, 1.15, 1],
          opacity: [0.9, 1, 0.9],
          boxShadow: [
            '0 0 0px rgba(0,0,0,0)', 
            `0 0 15px ${getColor()}`, 
            '0 0 0px rgba(0,0,0,0)'
          ],
          duration
        };
      case 'rotate':
        return {
          rotate: [0, 180, 0],
          opacity: [0.9, 1, 0.9],
          boxShadow: [
            '0 0 0px rgba(0,0,0,0)', 
            `0 0 15px ${getColor()}`, 
            '0 0 0px rgba(0,0,0,0)'
          ],
          duration: 4000
        };
      case 'bounce':
        return {
          translateY: [0, -8, 0],
          opacity: [0.9, 1, 0.9],
          boxShadow: [
            '0 0 0px rgba(0,0,0,0)', 
            `0 0 15px ${getColor()}`, 
            '0 0 0px rgba(0,0,0,0)'
          ],
          duration: 2000
        };
      case 'morph':
        return {
          borderRadius: ['50%', '35%', '50%'],
          scale: [1, 1.08, 1],
          opacity: [0.9, 1, 0.9],
          boxShadow: [
            '0 0 0px rgba(0,0,0,0)', 
            `0 0 15px ${getColor()}`, 
            '0 0 0px rgba(0,0,0,0)'
          ],
          duration: 3000
        };
      case 'sparkle':
        return {
          boxShadow: [
            '0 0 0px rgba(0,0,0,0)', 
            `0 0 20px ${getColor()}`, 
            '0 0 0px rgba(0,0,0,0)'
          ],
          scale: [1, 1.1, 1],
          opacity: [0.9, 1, 0.9],
          duration
        };
      case 'wave':
        return {
          scale: [1, 1.12, 1],
          opacity: [0.9, 1, 0.9],
          boxShadow: [
            '0 0 0px rgba(0,0,0,0)', 
            `0 0 15px ${getColor()}`, 
            '0 0 0px rgba(0,0,0,0)'
          ],
          duration: 3000
        };
      default:
        return { duration };
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Floating circles in background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-500/10 dark:bg-primary-400/10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
            }}
            animate={{
              x: [0, Math.random() * 60 - 30],
              y: [0, Math.random() * 60 - 30],
              rotate: [0, Math.random() > 0.5 ? 360 : -360],
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="inline-block mb-4"
            animate={floatAnimation}
          >
            <div className="relative mb-4">
              <div
                ref={titleGlowRef}
                className="absolute -inset-6 rounded-full opacity-70 blur-lg bg-gradient-to-r from-primary-500 to-primary-400 dark:opacity-50"
              />
              <h2 
                ref={titleRef}
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-400 relative z-10"
              >
                Our Services
              </h2>
            </div>
          </motion.div>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Comprehensive software solutions tailored to your business needs
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className="relative group"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500 ease-in-out group-hover:duration-200 z-10`} />
                   
              <motion.div 
                className="relative h-full bg-white dark:bg-gray-800 backdrop-blur-sm rounded-xl shadow-lg z-20 p-8 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                {/* Enhanced glow on hover */}
                <motion.div 
                  className={`absolute -inset-[150%] bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-30 dark:group-hover:opacity-40 blur-3xl -z-10`}
                  initial={false}
                />
                
                {/* Icon container with anime.js animation */}
                <div 
                  ref={el => { iconRefs.current[index] = el }}
                  className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center bg-gradient-to-r ${service.color} text-white relative z-10 overflow-hidden`}
                >
                  {/* Inner highlight */}
                  <div className="absolute inset-0.5 rounded-full bg-white/10" />
                  
                  {/* Icon wrapper */}
                  <div className="relative z-20">
                    {service.icon}
                  </div>
                  
                  {/* Background gradient */}
                  <div 
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.color}`}
                    style={{
                      filter: "brightness(1.1) contrast(1.1)"
                    }}
                  />
                </div>
                
                {/* Title with enhanced hover effect */}
                <motion.h3 
                  className={`text-2xl font-bold mb-3 transition-all duration-300 ${service.textColor}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.title}
                </motion.h3>
                
                {/* Description */}
                <motion.p 
                  className="text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {service.description}
                </motion.p>
                
                {/* Learn more link that appears on hover */}
                <motion.div
                  className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className={`flex items-center ${service.textColor}`}>
                    <span className="mr-2 font-medium">Learn more</span>
                    <svg 
                      className="w-5 h-5"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOffered;