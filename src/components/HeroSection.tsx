import React, { useEffect, useState } from 'react';
import { FiArrowRight, FiCode, FiSmartphone, FiMonitor } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  
  useEffect(() => {
    setMounted(true);
    
    // Auto-rotate features
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % features.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Enhanced animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Character-by-character animation with enhanced effects
  const titleCharAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        delay: i * 0.03,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const features = [
    {
      icon: <FiCode className="w-6 h-6 text-primary-500" />,
      title: 'Web Development',
      description: 'Modern, responsive websites built with the latest technologies',
    },
    {
      icon: <FiSmartphone className="w-6 h-6 text-primary-500" />,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications for iOS and Android',
    },
    {
      icon: <FiMonitor className="w-6 h-6 text-primary-500" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that enhance user experience',
    },
  ];
  
  // Carousel slides
  const slides = [
    {
      title: "Web Applications",
      description: "Modern web experiences with the latest technologies",
      icon: <FiCode className="w-10 h-10" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Mobile Design",
      description: "Native-like experiences for iOS and Android",
      icon: <FiSmartphone className="w-10 h-10" />,
      color: "from-green-500 to-teal-600",
    },
    {
      title: "UI/UX Design",
      description: "Beautiful interfaces with intuitive user experiences",
      icon: <FiMonitor className="w-10 h-10" />,
      color: "from-purple-500 to-pink-600",
    },
  ];

  // Split the title for word-by-word animation
  const titleWords = ["Crafting", "Digital", "Experiences"];
  
  // Split the description into individual characters for animation
  const descriptionText = "I'm a passionate full-stack developer specializing in building exceptional digital experiences that make an impact.";

  if (!mounted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-pulse text-2xl font-medium">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {/* Animated background with particles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800" />
        <motion.div 
          className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Animated background elements */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path 
                d="M 20 0 L 0 0 0 20" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.5"
                className="text-primary-200 dark:text-primary-900"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
        
        {/* Enhanced floating shapes with more dramatic animations */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary-500/20 dark:bg-primary-400/20 backdrop-blur-sm"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                rotate: [0, Math.random() * 360],
                scale: [0, 1, 0.8, 1]
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Title Animation with enhanced effects */}
          <motion.div 
            className="mb-10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap justify-center">
              {titleWords.map((word, i) => (
                <motion.div
                  key={i}
                  className="mx-2 relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: i * 0.2, 
                    ease: "easeOut" 
                  }}
                >
                  <span className={`inline-block text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight ${
                    i === 2 ? 'bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent relative' : ''
                  }`}>
                    {word.split('').map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        className="inline-block"
                        custom={charIndex}
                        initial="hidden"
                        animate="visible"
                        variants={titleCharAnimation}
                        whileHover={{ 
                          scale: 1.2, 
                          color: i === 2 ? undefined : "#0ea5e9", 
                          textShadow: "0px 0px 8px rgba(56, 189, 248, 0.6)",
                          rotateY: 20,
                          transition: { type: "spring" }
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                    
                    {/* Enhanced glow effect */}
                    {i === 2 && (
                      <motion.span 
                        className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 opacity-0 blur-xl"
                        animate={{ 
                          opacity: [0, 0.6, 0],
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                      />
                    )}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Enhanced Description Animation - now with character-by-character reveal */}
          <motion.p 
            variants={item}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto font-light relative"
          >
            {descriptionText.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 1.2 + index * 0.01,
                  ease: "easeOut"
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
          
          {/* Enhanced button animations */}
          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            {/* Get in Touch Button with enhanced animations */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn px-6 py-3 text-base font-medium relative overflow-hidden rounded-lg z-10 shadow-lg transition-all duration-300"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-400"
                whileHover={{ opacity: 0.9 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              />
              
              <motion.div 
                className="relative z-10 flex items-center justify-center text-white"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Get in Touch
                <FiArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
              </motion.div>
            </Link>
            
            {/* View My Work Button with enhanced animations */}
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="btn px-6 py-3 text-base font-medium relative overflow-hidden rounded-lg z-10 transition-all duration-300"
            >
              <motion.div 
                className="absolute inset-0 border border-sky-500 dark:border-sky-400 rounded-lg"
                whileHover={{ boxShadow: "0 0 10px rgba(56, 189, 248, 0.4)" }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                className="absolute inset-0 bg-sky-500/10 dark:bg-sky-400/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.span 
                className="relative z-10 text-sky-600 dark:text-sky-400"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                View My Work
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Rotating Features Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-24 grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: currentFeature === index ? 1.05 : 1,
                boxShadow: currentFeature === index ? 
                  "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" : 
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ 
                delay: 0.9 + index * 0.1,
                duration: 0.4,
                type: "spring",
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
            >
              <motion.div 
                className="w-14 h-14 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-5"
                whileHover={{ rotate: 360, scale: 1.1 }}
                animate={currentFeature === index ? {
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                } : {}}
                transition={{ 
                  duration: currentFeature === index ? 0.6 : 0.4,
                  ease: "easeInOut"
                }}
              >
                {feature.icon}
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold mb-3"
                animate={currentFeature === index ? {
                  color: ["#000", "#0ea5e9", "#000"],
                } : {}}
                transition={{ duration: 1.5 }}
              >
                {feature.title}
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              
              {/* Animated underline for active feature */}
              {currentFeature === index && (
                <motion.div 
                  className="h-0.5 bg-primary-500 mt-3"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;