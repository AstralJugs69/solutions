import React, { useEffect, useRef } from 'react';
import { FiCode, FiSmartphone, FiMonitor, FiLayers, FiDatabase, FiServer } from 'react-icons/fi';
import { motion } from 'framer-motion';
// Import anime.js with TypeScript ignore
// @ts-expect-error // Use @ts-expect-error instead
import anime from 'animejs';
// Removed TargetAndTransition as it's not explicitly used

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
    description: 'Building custom, responsive websites with modern tech like React, Next.js, and TypeScript.',
    icon: <FiCode className="w-8 h-8" />,
    color: 'from-blue-600 to-cyan-500',
    textColor: 'group-hover:text-blue-500',
    animationType: 'pulse'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    description: 'Developing cross-platform mobile apps for iOS & Android, using React Native or Flutter.',
    icon: <FiSmartphone className="w-8 h-8" />,
    color: 'from-purple-600 to-pink-500',
    textColor: 'group-hover:text-purple-500',
    animationType: 'bounce'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Crafting beautiful, intuitive interfaces that enhance user experience and drive engagement.',
    icon: <FiMonitor className="w-8 h-8" />,
    color: 'from-amber-600 to-orange-500',
    textColor: 'group-hover:text-amber-500',
    animationType: 'rotate'
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Solutions',
    description: 'Providing end-to-end development: frontend, backend, and database integration.',
    icon: <FiLayers className="w-8 h-8" />,
    color: 'from-emerald-600 to-green-500',
    textColor: 'group-hover:text-emerald-500',
    animationType: 'morph'
  },
  {
    id: 'database',
    title: 'Database Design',
    description: "Designing efficient, scalable database architectures tailored to your application's needs.",
    icon: <FiDatabase className="w-8 h-8" />,
    color: 'from-rose-600 to-red-500',
    textColor: 'group-hover:text-rose-500',
    animationType: 'sparkle'
  },
  {
    id: 'devops',
    title: 'DevOps & Deployment',
    description: 'Implementing CI/CD pipelines, containerization, and cloud deployment solutions.',
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
      transition: { duration: 0.5, ease: "easeOut" }
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
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
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
    }
  }, []);
  
  // Get anime.js configuration based on animation type
  const getAnimeConfig = (type: Service['animationType'], target: HTMLElement) => {
    // Common settings
    const duration = 2500;
    
    const colorMap: Record<string, string> = {
      'from-blue-600': 'rgba(59, 130, 246, 0.7)',
      'from-purple-600': 'rgba(168, 85, 247, 0.7)',
      'from-amber-600': 'rgba(245, 158, 11, 0.7)',
      'from-emerald-600': 'rgba(16, 185, 129, 0.7)',
      'from-rose-600': 'rgba(244, 63, 94, 0.7)',
      'from-indigo-600': 'rgba(79, 70, 229, 0.7)',
    };

    const getColor = () => {
      for (const className in colorMap) {
        if (target.classList.contains(className)) {
          return colorMap[className];
        }
      }
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
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent/30" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Floating circles in background */}
      <div className="absolute inset-0 -z-10 motion-reduce:hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-500/10 dark:bg-primary-400/10 motion-reduce:animate-none"
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
          className="text-center mb-24 motion-reduce:animate-none motion-reduce:transition-none"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="inline-block mb-4 motion-reduce:animate-none"
            animate={floatAnimation}
          >
            <div className="relative mb-4">
              <div
                ref={titleGlowRef}
                className="absolute -inset-6 rounded-full opacity-70 blur-lg bg-gradient-to-r from-primary-500 to-primary-400 dark:opacity-50 motion-reduce:hidden"
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
            className="text-lg md:text-xl text-text/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Comprehensive software solutions tailored to your business needs
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 motion-reduce:animate-none motion-reduce:transition-none"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className="relative group motion-reduce:transform-none motion-reduce:transition-none motion-reduce:hover:scale-100"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              tabIndex={0} // Make card focusable
            >
              <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 blur-lg transition-all duration-500 ease-in-out group-hover:duration-200 z-10 motion-reduce:opacity-0`} />
                   
              <motion.div 
                className="relative h-full bg-background/90 dark:bg-background/80 backdrop-blur-sm rounded-xl shadow-lg z-20 p-8 sm:p-10 overflow-hidden border border-accent/20"
              >
                {/* Enhanced glow on hover */}
                <motion.div 
                  className={`absolute -inset-[150%] bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-30 dark:group-hover:opacity-40 blur-3xl -z-10`}
                  initial={false}
                />
                
                {/* Icon container with anime.js animation */}
                <div 
                  ref={el => { iconRefs.current[index] = el }}
                  className={`w-16 h-16 rounded-full mb-8 flex items-center justify-center bg-gradient-to-r ${service.color} text-white relative z-10 overflow-hidden motion-reduce:animate-none`}
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
                  className={`text-xl sm:text-2xl font-bold mb-4 transition-all duration-300 ${service.textColor} motion-reduce:hover:scale-100`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.title}
                </motion.h3>
                
                {/* Description */}
                <motion.p 
                  className="text-text/80"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {service.description}
                </motion.p>
                
                {/* Learn more link that appears on hover */}
                <motion.div
                  className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 motion-reduce:hover:scale-100"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className={`flex items-center ${service.textColor}`}>
                    {/* TODO: This should ideally be an <a> tag if it navigates */}
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