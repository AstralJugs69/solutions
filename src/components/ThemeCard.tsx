import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
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

// Animation variants - moved outside
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

// Helper function to determine text color based on background - moved outside
function getContrastYIQ(hexcolor: string): 'light' | 'dark' {
  const hex = hexcolor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? 'light' : 'dark';
}

// Format category name - moved outside
const formatCategory = (category: string): string => {
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const ThemeCard: React.FC<ThemeCardProps> = ({ theme, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Extract colors for the palette - memoized
  const colorPalette: ColorSwatch[] = useMemo(() => {
    return Object.entries(theme.colors)
      .filter(([key]) => key !== 'text') // Exclude text color from the palette
      .map(([name, hex]) => ({
        name,
        hex: hex as string,
        isLight: getContrastYIQ(hex as string) === 'light'
      }));
  }, [theme.colors]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(theme.id);
    }
  };

  // Removed handleDemoClick and handleSourceClick as they are unused

  return (
    <motion.div
      className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col motion-reduce:transform-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100 motion-reduce:transition-none"
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
      <div className="relative overflow-hidden bg-accent/10" style={{ paddingTop: '56.25%' }}>
        {theme.previewImageUrl && (
          <motion.img
            src={theme.previewImageUrl}
            alt={`${theme.name} preview`}
            className="absolute inset-0 w-full h-full object-cover motion-reduce:opacity-90" // Keep initial opacity, remove hover effect for reduced motion
            initial={{ opacity: 0.9 }}
            animate={{ opacity: isHovered ? 1 : 0.9 }}
            transition={{ duration: 0.3 }} // This transition will be overridden by motion-reduce variant if Framer Motion handles it, or ignored.
            loading="lazy"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-text">{theme.name}</h3>
          {theme.category && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
              {formatCategory(theme.category)}
            </span>
          )}
        </div>

        {theme.description && (
          <p className="text-text/80 mb-4 line-clamp-2">
            {theme.description}
          </p>
        )}

        {/* Color Palette */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-text/70">
              Color Palette
            </span>
            {theme.year && (
              <span className="text-xs text-text/60">
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
                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-accent/10 text-text/90 dark:bg-accent/20 dark:text-text/90"
              >
                {tech}
              </span>
            ))}
            {theme.technologies.length > 3 && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-accent/10 text-text/70 dark:bg-accent/20 dark:text-text/60">
                +{theme.technologies.length - 3} more
              </span>
            )}
            {theme.sourceUrl && (
              <motion.a
                href={theme.sourceUrl}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-text/60 hover:text-text transition-colors motion-reduce:transform-none motion-reduce:hover:scale-100 motion-reduce:hover:y-0"
                aria-label="View source code"
                whileHover={{ scale: 1.1, y: -1 }}
                transition={{ duration: 0.2 }}
              >
                <FiGithub className="w-4 h-4" />
              </motion.a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ThemeCard;