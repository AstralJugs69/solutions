import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiX, FiExternalLink, FiGithub, FiEdit3 } from 'react-icons/fi';
import { themeOptionsData, type ThemeOption, type Category } from '../data/themes';
import ThemeCard from './ThemeCard';
import { useTheme } from '../contexts/ThemeContext';

const UIGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedThemeId, setSelectedThemeId] = useState<string | null>(null);

  // Categories for filtering
  const categories: { id: Category | 'all'; name: string }[] = [
    { id: 'all', name: 'All Work' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' },
  ];

  // Filter themes based on selected category
  const filteredThemes = themeOptionsData.filter((theme) => {
    if (selectedCategory === 'all') return true;
    return theme.category === selectedCategory;
  });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Use theme context
  const { setCurrentTheme } = useTheme();

  // Get theme details for modal
  const currentTheme = themeOptionsData.find((t) => t.id === selectedThemeId) || null;

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work. Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Mobile filter dropdown */}
        <div className="md:hidden mb-8 relative">
          <button
            className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            aria-expanded={isFilterOpen}
            aria-haspopup="listbox"
            aria-label="Filter projects by category"
          >
            <span>
              {categories.find((c) => c.id === selectedCategory)?.name}
            </span>
            <FiFilter className="ml-2" />
          </button>

          {isFilterOpen && (
            <div 
              className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg"
              role="listbox"
              aria-label="Project categories"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  role="option"
                  aria-selected={selectedCategory === category.id}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    selectedCategory === category.id
                      ? 'bg-primary-50 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setIsFilterOpen(false);
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop filter tabs */}
        <div className="hidden md:flex justify-center mb-12">
          <div 
            className="inline-flex rounded-lg p-1 bg-gray-100 dark:bg-gray-800"
            role="tablist"
            aria-label="Project categories"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                role="tab"
                aria-selected={selectedCategory === category.id}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Projects"
        >
          <AnimatePresence>
            {filteredThemes.map((theme) => (
              <motion.div 
                key={theme.id} 
                variants={item} 
                layout
                role="listitem"
              >
                <ThemeCard 
                  theme={theme} 
                  onClick={() => setSelectedThemeId(theme.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {currentTheme && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedThemeId(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
            >
              <motion.div
                className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal header */}
                <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <h3 id="project-modal-title" className="text-xl font-bold">
                    {currentTheme.name}
                  </h3>
                  <button
                    onClick={() => setSelectedThemeId(null)}
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    aria-label="Close project details"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal content */}
                <div className="p-6">
                  <div className="mb-6 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <img 
                      src={currentTheme.previewImageUrl} 
                      alt={`Screenshot of ${currentTheme.name}`} 
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h4 className="text-lg font-semibold mb-2">Project Overview</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {currentTheme.description || 'No description available.'}
                      </p>
                      
                      {currentTheme.technologies && currentTheme.technologies.length > 0 && (
                        <>
                          <h4 className="text-lg font-semibold mb-2 mt-6">Technologies</h4>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {currentTheme.technologies.map((tech: string, index: number) => (
                              <span 
                                key={index}
                                className="px-3 py-1 text-sm rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Category</h4>
                        <p className="font-medium">
                          {currentTheme.category === 'web' 
                            ? 'Web Application' 
                            : currentTheme.category === 'mobile' 
                              ? 'Mobile Application' 
                              : 'UI/UX Design'}
                        </p>
                      </div>
                      
                      {currentTheme.year && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Year</h4>
                          <p className="font-medium">{currentTheme.year}</p>
                        </div>
                      )}
                      
                      {(currentTheme.demoUrl || currentTheme.sourceUrl) && (
                        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex flex-col sm:flex-row gap-3">
                            <button
                              onClick={() => {
                                setCurrentTheme(currentTheme);
                                setSelectedThemeId(null);
                              }}
                              className="btn btn-primary w-full justify-center"
                            >
                              <FiEdit3 className="mr-2" />
                              Apply Theme
                            </button>
                            {currentTheme.demoUrl && currentTheme.demoUrl !== '#' && (
                              <a
                                href={currentTheme.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline w-full justify-center"
                              >
                                <FiExternalLink className="mr-2" />
                                Live Demo
                              </a>
                            )}
                            {currentTheme.sourceUrl && currentTheme.sourceUrl !== '#' && (
                              <a
                                href={currentTheme.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline w-full justify-center"
                              >
                                <FiGithub className="mr-2" />
                                Source Code
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UIGallery;