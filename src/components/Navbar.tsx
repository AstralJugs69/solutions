import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { name: 'Home', to: 'home', offset: -80 },
    { name: 'Services', to: 'services', offset: -80 },
    { name: 'Portfolio', to: 'portfolio', offset: -60 },
    { name: 'Contact', to: 'contact', offset: 0 },
  ];

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-r from-white/95 to-gray-50/95 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-md' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Glow effect line */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-primary-600/0 via-primary-500/80 to-primary-600/0 dark:from-primary-500/0 dark:via-primary-400/80 dark:to-primary-500/0"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent cursor-pointer tracking-tight group"
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05 }}
          >
            Portfolio
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.to}
                activeClass="text-primary-600 dark:text-primary-400 font-semibold"
                to={item.to}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={500}
                onSetActive={() => setActiveSection(item.to)}
                className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 cursor-pointer font-medium relative group"
              >
                <motion.div
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
              >
                {item.name}
                  
                  {/* Hover line effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-primary-500 dark:bg-primary-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeSection === item.to ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <motion.button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700"
      >
          <div className="container mx-auto px-4 flex flex-col space-y-4 py-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
            <Link
              activeClass="text-primary-600 dark:text-primary-400 font-medium"
              to={item.to}
              spy={true}
              smooth={true}
              offset={item.offset}
              duration={500}
                  className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 block"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
              </motion.div>
          ))}
        </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
