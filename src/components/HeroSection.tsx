import React, { useCallback, useEffect, useState } from 'react';
import { FiArrowRight, FiCode, FiSmartphone, FiMonitor } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import '../components/embla.css';

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  
  // Initialize Embla carousel with autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);
  
  // Track carousel hover state to pause autoplay
  const [isHovered, setIsHovered] = useState(false);
  
  // Pause autoplay on hover
  useEffect(() => {
    if (!emblaApi) return;
    
    if (isHovered) {
      emblaApi.plugins().autoplay.stop();
    } else {
      emblaApi.plugins().autoplay.play();
    }
  }, [emblaApi, isHovered]);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Mouse position for parallax effects
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    
    // Calculate mouse position as percentage of element dimensions
    x.set((mouseX / width - 0.5) * 20);  // -10 to 10
    y.set((mouseY / height - 0.5) * 20); // -10 to 10
  };

  // Animation variants
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

  // Character-by-character animation
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
  const headingText = "Crafting Digital Experiences";
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
        
        {/* Animated floating shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary-500/10 dark:bg-primary-400/10 backdrop-blur-sm"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
                borderRadius: Math.random() > 0.5 ? '50%' : `${Math.random() * 40}% ${Math.random() * 40}% ${Math.random() * 40}% ${Math.random() * 40}%`,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
                rotate: [0, Math.random() * 360],
                borderRadius: Math.random() > 0.5 
                  ? ['50%', '50%'] 
                  : [
                      `${Math.random() * 40}% ${Math.random() * 40}% ${Math.random() * 40}% ${Math.random() * 40}%`,
                      `${Math.random() * 40}% ${Math.random() * 40}% ${Math.random() * 40}% ${Math.random() * 40}%`
                    ],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
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
          onMouseMove={handleMouseMove}
        >
          {/* 3D Title Animation */}
          <motion.div 
            className="mb-10 overflow-hidden perspective-1000"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              perspective: "1000px"
            }}
          >
            <div className="flex flex-wrap justify-center">
              {titleWords.map((word, i) => (
                <motion.div
                  key={i}
                  className="mx-2 relative"
                  style={{
                    transformStyle: "preserve-3d",
                    rotateX: useTransform(y, [-10, 10], [5, -5]),
                    rotateY: useTransform(x, [-10, 10], [-5, 5])
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
                          color: i === 2 ? "" : "#0ea5e9", 
                          textShadow: "0px 0px 8px rgba(56, 189, 248, 0.6)"
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 10 
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                    
                    {/* Glow element for special effect */}
                    {i === 2 && (
                      <motion.span 
                        className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 opacity-0 blur-xl"
                        animate={{ 
                          opacity: [0, 0.4, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    )}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Animated Description with typewriter effect */}
          <motion.p 
            variants={item}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto font-light relative"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            {descriptionText.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.01, duration: 0.2 }}
                className="inline-block"
                whileHover={{ 
                  scale: 1.2, 
                  color: "#0ea5e9",
                  transition: { duration: 0.1 }
                }}
              >
                {char}
              </motion.span>
            ))}
            
            {/* Animated cursor */}
            <motion.span
              className="inline-block w-0.5 h-6 bg-primary-500 ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{ verticalAlign: 'middle' }}
            />
          </motion.p>
          
          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            {/* Get in Touch Button with advanced effects */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn btn-primary px-8 py-4 text-lg font-medium group relative overflow-hidden z-10"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400"
                initial={{}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              />
              
              {/* Glowing particle effects */}
              <motion.div 
                className="absolute inset-0 z-0" 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                      width: Math.random() * 6 + 2,
                      height: Math.random() * 6 + 2,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      x: [0, (Math.random() - 0.5) * 50],
                      y: [0, (Math.random() - 0.5) * 50],
                      opacity: [0, 0.7, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1 + Math.random() * 2,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </motion.div>
              
              {/* Button content */}
              <motion.div 
                className="relative z-10 flex items-center justify-center text-white"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Get in Touch
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="ml-2"
                >
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </motion.div>
              </motion.div>
              
              {/* Glow effect */}
              <motion.div 
                className="absolute inset-0 -z-10 rounded-md bg-primary-500/50 blur-md"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.8 }}
                whileTap={{ opacity: 1 }}
              />
            </Link>
            
            {/* View My Work Button with outline effect */}
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="btn btn-outline px-8 py-4 text-lg font-medium group relative overflow-hidden"
            >
              {/* Border animation */}
              <motion.div 
                className="absolute inset-0 border-2 border-primary-500 dark:border-primary-400 rounded-md"
                animate={{ 
                  boxShadow: ["0 0 0px rgba(56, 189, 248, 0)", "0 0 15px rgba(56, 189, 248, 0.5)", "0 0 0px rgba(56, 189, 248, 0)"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
              
              {/* Button fill animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-400/20 dark:from-primary-600/20 dark:to-primary-400/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: "center" }}
              />
              
              <motion.span 
                className="relative z-10"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                View My Work
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Showcase Carousel with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-24"
        >
          <div 
            className="overflow-hidden" 
            ref={emblaRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex">
              {slides.map((slide, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 pl-4 first:pl-0"
                >
                  <motion.div 
                    className={`bg-gradient-to-br ${slide.color} text-white p-8 md:p-12 rounded-2xl h-full relative overflow-hidden`}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300,
                      damping: 20 
                    }}
                  >
                    {/* Background animation */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "mirror",
                      }}
                      style={{
                        backgroundSize: "200% 200%",
                      }}
                    />
                    
                    {/* Floating particles */}
                    <div className="absolute inset-0 overflow-hidden">
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-full bg-white/20"
                          style={{
                            width: Math.random() * 10 + 3,
                            height: Math.random() * 10 + 3,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [0, -50],
                            opacity: [0, 0.5, 0],
                          }}
                          transition={{
                            duration: 3 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 10,
                          }}
                        />
                      ))}
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 relative z-10">
                      <motion.div 
                        className="bg-white/20 rounded-xl p-4 backdrop-blur-sm"
                        whileHover={{ 
                          rotate: [0, -5, 5, -5, 5, 0],
                          scale: 1.1,
                          boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
                        }}
                        transition={{ 
                          duration: 0.5,
                          type: "spring",
                          stiffness: 300
                        }}
                      >
                        {slide.icon}
                      </motion.div>
                      <div className="text-center md:text-left">
                        <motion.h3 
                          className="text-2xl md:text-3xl font-bold mb-3"
                          whileHover={{ 
                            scale: 1.03,
                            textShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)"
                          }}
                        >
                          {slide.title}
                        </motion.h3>
                        <motion.p 
                          className="text-white/80 text-lg"
                          whileHover={{ opacity: 1 }}
                        >
                          {slide.description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features Grid with animations */}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
            >
              <motion.div 
                className="w-14 h-14 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-5"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;