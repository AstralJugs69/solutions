import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiX, FiExternalLink, FiGithub, FiEdit3 } from 'react-icons/fi';
import { themeOptionsData, type Category } from '../data/themes'; // Removed ThemeOption
import ThemeCard from './ThemeCard';
import { useTheme } from '../contexts/ThemeContext';

interface UIGalleryProps {
  onSelectShowcase: (showcaseId: string) => void;
}

// Categories for filtering - moved outside component
const categories: { id: Category | 'all'; name: string }[] = [
  { id: 'all', name: 'All Work' },
  { id: 'web', name: 'Web Apps' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'design', name: 'UI/UX Design' },
];

const formatCategoryForDisplay = (category: Category | undefined): string => {
  if (!category) return 'N/A';
  switch (category) {
    case 'web': return 'Web Application';
    case 'mobile': return 'Mobile Application';
    case 'design': return 'UI/UX Design';
    default: return 'Other';
  }
};

const UIGallery: React.FC<UIGalleryProps> = ({ onSelectShowcase }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  // Removed selectedThemeId and setSelectedThemeId state

  // Filter themes based on selected category - memoized
  const filteredThemes = useMemo(() => {
    if (selectedCategory === 'all') return themeOptionsData;
    return themeOptionsData.filter((theme) => theme.category === selectedCategory);
  }, [selectedCategory]);

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
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Use theme context - setCurrentTheme is no longer used here as modal is removed
  // const { setCurrentTheme } = useTheme();

  // Removed currentTheme memoization (was for modal)

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">Featured Projects</h2>
          <p className="text-base md:text-lg text-text/80 max-w-2xl mx-auto">
            A selection of my recent work. Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Mobile filter dropdown */}
        <div className="md:hidden mb-8 relative">
          <button
            type="button"
            className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-text bg-background border border-accent/30 rounded-lg shadow-sm"
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
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                className="absolute z-10 mt-1 w-full bg-background border border-accent/20 rounded-lg shadow-lg"
                role="listbox"
                aria-label="Project categories"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {categories.map((category) => (
                  <button
                  type="button"
                  key={category.id}
                  role="option"
                  aria-selected={selectedCategory === category.id}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    selectedCategory === category.id
                      ? 'bg-primary-50 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300'
                      : 'text-text hover:bg-accent/10'
                  }`}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setIsFilterOpen(false);
                  }}
                >
                  {category.name}
                </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop filter tabs */}
        <div className="hidden md:flex justify-center mb-12">
          <div 
            className="inline-flex rounded-lg p-1 bg-accent/10"
            role="tablist"
            aria-label="Project categories"
          >
            {categories.map((category) => (
              <button
                type="button"
                key={category.id}
                role="tab"
                aria-selected={selectedCategory === category.id}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-background text-primary shadow-sm'
                    : 'text-text/70 hover:text-text'
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 motion-reduce:animate-none motion-reduce:transition-none"
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
                className="motion-reduce:animate-none motion-reduce:transition-none"
              >
                <ThemeCard 
                  theme={theme} 
                  onClick={() => onSelectShowcase(theme.id)} // Changed to call onSelectShowcase
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {/* Project Modal Removed */}
      </div>
    </section>
  );
};

export default UIGallery;