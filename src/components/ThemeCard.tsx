import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import type { ThemeOption } from '../data/themes';

interface ThemeCardProps {
  theme: ThemeOption;
  onClick: (themeId: string) => void;
}

interface ColorSwatch {
  name: string;
  hex: string;
  isLight: boolean;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ theme, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants
  const cardVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.03,
      transition: { 
        duration: 0.3,
        ease: 'easeOut'
      } 
    },
    tap: { 
      scale: 0.98 
    }
  };

  // Extract colors for the palette
  const colorPalette: ColorSwatch[] = Object.entries(theme.colors)
    .filter(([key]) => key !== 'text') // Exclude text color from the palette
    .map(([name, hex]) => ({
      name,
      hex: hex as string,
      isLight: getContrastYIQ(hex as string) === 'light'
    }));

  // Helper function to determine text color based on background
  function getContrastYIQ(hexcolor: string): 'light' | 'dark' {
    // Remove # if present
    const hex = hexcolor.replace('#', '');
    
    // Convert to RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    // Calculate YIQ (brightness)
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    
    // Return light or dark based on YIQ
    return (yiq >= 128) ? 'light' : 'dark';
  }

  // Format category name
  const formatCategory = (category: string): string => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(theme.id);
    }
  };

  // Handle demo button click
  const handleDemoClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    if (theme.demoUrl && theme.demoUrl !== '#') {
      window.open(theme.demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Handle source button click
  const handleSourceClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    if (theme.sourceUrl && theme.sourceUrl !== '#') {
      window.open(theme.sourceUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(theme.id)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${theme.name}`}
    >
      {/* Preview Image */}
      <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-700" style={{ paddingTop: '56.25%' }}>
        {theme.previewImageUrl && (
          <motion.img
            src={theme.previewImageUrl}
            alt={`${theme.name} preview`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0.9 }}
            animate={{ opacity: isHovered ? 1 : 0.9 }}
            transition={{ duration: 0.3 }}
            loading="lazy"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{theme.name}</h3>
          {theme.category && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
              {formatCategory(theme.category)}
            </span>
          )}
        </div>

        {theme.description && (
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {theme.description}
          </p>
        )}

        {/* Color Palette */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Color Palette
            </span>
            {theme.year && (
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {theme.year}
              </span>
            )}
          </div>
          
          <div className="flex h-2 rounded-full overflow-hidden">
            {colorPalette.map((color, index: number) => (
              <div 
                key={`${color.name}-${index}`}
                className="flex-1"
                style={{ backgroundColor: color.hex }}
                title={`${color.name}: ${color.hex}`}
                aria-label={`${color.name} color`}
              />
            ))}
          </div>
        </div>

                  {/* Technologies */}
        {theme.technologies && theme.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1">
            {theme.technologies.slice(0, 3).map((tech: string, index: number) => (
              <span 
                key={`tech-${index}`}
                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
            {theme.technologies.length > 3 && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                +{theme.technologies.length - 3} more
              </span>
            )}
            {theme.sourceUrl && (
              <a 
                href={theme.sourceUrl}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                aria-label="View source code"
              >
                <FiGithub className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ThemeCard;